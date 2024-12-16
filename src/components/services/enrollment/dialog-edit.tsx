import { useState } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { editEnrollment } from "@components/services/enrollment";
import type { PostEnrollment } from "@components/types/api";


interface EditProps {
  enrollment: PostEnrollment;
}

export function Edit({ enrollment }: EditProps) {
  const [formData, setFormData] = useState({
    student: enrollment.student || 0, 
    curriculum: enrollment.curriculum,
    school_year: enrollment.school_year,
    status: enrollment.status,
    enrollment_date: enrollment.enrollment_date,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "student" || name === "status" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await editEnrollment({
        ...enrollment,
        ...formData,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error updating schedule");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit Schedule</DialogTitle>
            <DialogDescription>
              Make changes to the schedule here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="course" className="text-right">
                School Year
              </Label>
              <Input
                id="school_year"
                name="school_year"
                type="number"
                value={formData.school_year}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="day" className="text-right">
                Status
              </Label>
              <Input
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Saving..." : "Save changes"}
              </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </>
  );
}

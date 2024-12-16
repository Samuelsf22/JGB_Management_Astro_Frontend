import { useState } from "react";
import { Button } from "@components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { editCourse } from "@components/services/course";
import type { Course } from "@components/types/api";



interface EditProps {
  course: Course;
}

export function Edit({ course }: EditProps) {
  const [formData, setFormData] = useState({
    name: course.name,
    school_year: course.school_year,
    weekly_hours: course.weekly_hours,
    curriculum: course.curriculum,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "course" || name === "classroom" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await editCourse({
        ...course,
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
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input 
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange} 
            className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              School Year
            </Label>
            <Input 
            id="school_year" 
            name="school_year"
            type="number"
            value={formData.school_year}
            onChange={handleChange}
            className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Weekly Hours
            </Label>
            <Input 
            id="weekly_hours" 
            name="weekly_hours"
            type="number"
            value={formData.weekly_hours}
            onChange={handleChange}
            className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              Close
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

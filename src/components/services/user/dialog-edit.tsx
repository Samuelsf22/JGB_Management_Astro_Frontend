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
import { editUser } from "@components/services/user";
import type { User } from "@components/types/api";

interface EditProps {
  user: User;
}

export function Edit({ user }: EditProps) {
  const [formData, setFormData] = useState({
    groups: user.groups,
    last_login: user.last_login,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
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
        
      await editUser({
        ...user,
        ...formData,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error updating user");
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
              First name
              </Label>
              <Input
                id="fist_name"
                name="fist_name"
                type="text"
                value={formData.first_name}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="course" className="text-right">
              Last Name
              </Label>
              <Input
                id="last_name"
                name="last_name"
                type="text"
                value={formData.last_name}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="classroom" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="mail"
                value={formData.email}
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

import { useState } from "react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@components/ui/dialog";

import { deleteSchedule } from "@components/services/schedule";

interface Props {
  title: string;
  id: number;
  onDelete: () => void;
}


export function Delete({ title, id, onDelete }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await deleteSchedule(id);
      
      if (response.ok) {
        onDelete();
        setIsOpen(false);
      } else {
        throw new Error("Failed to delete schedule");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error deleting schedule");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          Delete
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent 
        className="sm:max-w-[425px]"
      >
        <DialogHeader>
          <DialogTitle>Delete {title}</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this {title}? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button 
              type="button" 
              variant="destructive"
              onClick={handleDelete}
              disabled={isLoading}
            >
              {isLoading ? "Deleting..." : "Delete"}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </>
  );
}
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@components/ui/dialog";

interface Props {
  id: number;
  title: string;
}

export function Delete({ id, title }: Props) {
  const { toast } = useToast();
  const deleteCourseClient = async () => {
    const response = await fetch("/api/course/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    const { success } = await response.json();
    return success;
  };

  return (
    <>
      <DialogTrigger asChild>
        <DropdownMenuItem
          onSelect={(event) => {
            event.preventDefault();
          }}
        >
          Delete
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete {title}</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this {title}? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              Close
            </Button>
          </DialogClose>
          <Button
            type="submit"
            variant="destructive"
            onClick={async () => {
              const success = await deleteCourseClient();
              if (success) {
                toast({
                  description: `Course deleted`,
                });
              } else {
                toast({
                  description: `Failed to delete course`,
                  variant: "destructive",
                });
              }
            }}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </>
  );
}

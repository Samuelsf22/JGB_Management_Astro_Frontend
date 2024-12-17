import type { Row } from "@tanstack/react-table";
import { MoreVertical } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import React, { useState } from "react";
// import { z } from "zod";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  idRow: string;
  name: string;
  title: string;
  apiUrl: string;
  children: (setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>) => React.ReactNode;
}
// This is the schema for the form data, it's not implemented yet
// const formSchema = z.object({
//   name: z.string().length(100),
//   school_year: z.number().int().positive(),
//   weekly_hours: z.number().int().positive(),
//   curriculum: z.number().int().positive(),
// });

export function DataTableRowActions<TData>({
  row,
  idRow,
  name,
  title,
  apiUrl,
  children,
}: DataTableRowActionsProps<TData>) {
  const { toast } = useToast();
  const deleteCourse = async () => {
    const id = row.getValue(idRow);
    const response = await fetch(apiUrl, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    const { success } = await response.json();
    return success;
  };

  const isSuccessful = (success: boolean) => {
    if (success) {
      toast({
        title: "Success",
        description: `${title} deleted`,
      });
    } else {
      toast({
        title: "Error",
        description: `Failed to delete ${title}`,
        variant: "destructive",
      });
    }
    setOpenDelete(false);
  };

  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="flex size-9 rounded-full data-[state=open]:bg-muted ring-inset"
          >
            <MoreVertical />
            <span className="sr-only">Actions</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onSelect={() => setOpenEdit(true)}>
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => setOpenDelete(true)}>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog open={openEdit} onOpenChange={setOpenEdit}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          {children(setOpenEdit)}
        </DialogContent>
      </Dialog>
      <Dialog open={openDelete} onOpenChange={setOpenDelete}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete {row.getValue(name)}</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this {title}? This action cannot
              be undone.
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
                const success = await deleteCourse();
                isSuccessful(success);
              }}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

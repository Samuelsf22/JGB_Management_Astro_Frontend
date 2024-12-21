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

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  dialogDelete: {
    id_row: string;
    name: string;
    title: string;
    description: string;
    apiUrl: string;
  };
  children: (
    setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>
  ) => React.ReactNode;
}

export function DataTableRowActions<TData>({
  row,
  dialogDelete,
  children,
}: DataTableRowActionsProps<TData>) {
  const { toast } = useToast();
  const deleteCourse = async () => {
    const id = row.getValue(dialogDelete.id_row);
    const response = await fetch(dialogDelete.apiUrl, {
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
        description: `${dialogDelete.name} deleted`,
      });
    } else {
      toast({
        title: "Error",
        description: `Failed to delete ${dialogDelete.name}`,
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
        {children(setOpenEdit)}
      </Dialog>
      <Dialog open={openDelete} onOpenChange={setOpenDelete}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{dialogDelete.title}</DialogTitle>
            <DialogDescription>{dialogDelete.description}</DialogDescription>
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

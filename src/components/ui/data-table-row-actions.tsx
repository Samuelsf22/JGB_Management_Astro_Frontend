import type { Row } from "@tanstack/react-table";
import { MoreVertical } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, type ReactNode } from "react";
import { Dialog } from "@/components/ui/dialog";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  dialog_edit: ReactNode;
  dialog_delete: ReactNode;
}

export function DataTableRowActions<TData>({
  row,
  dialog_edit,
  dialog_delete,
}: DataTableRowActionsProps<TData>) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hasOpenDialog, setHasOpenDialog] = useState(false);

  function handleDialogItemOpenChange(open: boolean) {
    setHasOpenDialog(open);
    if (open === false) {
      setDropdownOpen(false);
    }
  }
  return (
    <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="flex size-9 rounded-full data-[state=open]:bg-muted ring-inset"
        >
          <MoreVertical />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" hidden={hasOpenDialog}>
        <Dialog onOpenChange={handleDialogItemOpenChange}>{dialog_edit}</Dialog>
        <Dialog onOpenChange={handleDialogItemOpenChange}>{dialog_delete}</Dialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

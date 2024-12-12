import { DataTableColumnHeader } from "@components/ui/data-table-column-header";
import type { Course } from "@components/types/api";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTableRowActions } from "@/components/ui/data-table-row-actions";
import { Edit } from "@/components/services/course/dialog-edit";
import { Delete } from "@/components/services/dialog-delete";

export const columns: ColumnDef<Course>[] = [
  {
    accessorKey: "id_course",
    header: "id",
    size: 50,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Name" />;
    },
    size: 300,
  },
  {
    accessorKey: "school_year",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="School Year" />;
    },
  },
  {
    accessorKey: "weekly_hours",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Weekly Hours" />;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <DataTableRowActions
        // row={row}
        dialog_edit={<Edit />}
        dialog_delete={<Delete title="course"/>}
      />
    ),
  },
];

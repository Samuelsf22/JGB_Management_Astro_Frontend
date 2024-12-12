import { DataTableColumnHeader } from "@components/ui/data-table-column-header";
import type { Course } from "@components/types/api";
import type { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Course>[] = [
  {
    accessorKey: "id_course",
    header: "id",
    size:50
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Name" />;
    },
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
    accessorKey: "actions",
    header: "Actions",
  },
];

import { DataTableColumnHeader } from "@components/ui/data-table-column-header";
import type { User } from "@components/types/api";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTableRowActions } from "@/components/ui/data-table-row-actions";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "id",
    size: 50,
  },
  {
    accessorKey: "groups",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Type" />;
    },

  },
  {
    accessorKey: "first_name",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="First Name" />;
    },
  },
  {
    accessorKey: "last_name",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Last Name" />;
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Email" />;
    },
  },
];

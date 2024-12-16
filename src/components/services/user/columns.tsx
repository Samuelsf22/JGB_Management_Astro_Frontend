import { DataTableColumnHeader } from "@components/ui/data-table-column-header";
import type { User } from "@components/types/api";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTableRowActions } from "@/components/ui/data-table-row-actions";
import { Edit } from "@services/user/dialog-edit";

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
  {
    id: "actions",
    cell: ({ row }) => (
      <DataTableRowActions
        row={row}
        idRow="id"
        name="name"
        title="user"
        apiUrl="/api/user"
        dialog_edit={
          <Edit
            user={{
              id: row.original.id,
              groups: row.original.groups,
              last_login: row.original.last_login,
              first_name: row.original.first_name,
              last_name: row.original.last_name,
              email: row.original.email,
              teacher: row.original.teacher,
              is_superuser: row.original.is_superuser,
              is_staff: row.original.is_staff,
              is_active: row.original.is_active,
              user_permissions: row.original.user_permissions,
            }}
          />
        }
      />
    ),
  },
];

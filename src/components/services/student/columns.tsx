import { DataTableColumnHeader } from "@components/ui/data-table-column-header";
import type { Student } from "@components/types/api";
import type { ColumnDef, Row } from "@tanstack/react-table";
import { DataTableRowActions } from "@/components/ui/data-table-row-actions";

interface Props {
  showActions?: boolean;
}

const actions = (row: Row<Student>) => {
  return (
    <DataTableRowActions
      row={row}
      idRow="id_student"
      name="fist_name"
      title="student"
      apiUrl="/api/students"
    >
      {(setOpenEdit) => <button onClick={() => setOpenEdit(false)}>test</button>}
    </DataTableRowActions>
  );
};

export const columns = ({ showActions }: Props): ColumnDef<Student>[] => {
  const cols: ColumnDef<Student>[] = [
    {
      accessorKey: "id_student",
      header: "id",
      size: 50,
    },
    {
      accessorKey: "dni",
      header: "DNI",
      size: 100,
    },
    {
      accessorKey: "first_name",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Name" />;
      },
    },
    {
      accessorKey: "last_name",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Last Name" />;
      },
    },
    {
      accessorKey: "birth_date",
      header: "Birth Date",
    },
    {
      accessorKey: "enrollment_date",
      header: "Enrollment Date",
    },
    {
      accessorKey: "address",
      header: "Address",
    },
  ];
  if (showActions) {
    cols.push({
      accessorKey: "actions",
      cell: ({ row }) => actions(row),
    });
  }
  return cols;
};

import { DataTableColumnHeader } from "@components/ui/data-table-column-header";
import type { Course } from "@components/types/api";
import type { ColumnDef, Row } from "@tanstack/react-table";
import { DataTableRowActions } from "@/components/ui/data-table-row-actions";
import { Edit } from "./dialog-edit";

interface Props {
  showActions?: boolean;
}

const actions = (row: Row<Course>) => {
  return (
    <DataTableRowActions
      row={row}
      idRow="id_course"
      name="name"
      title="course"
      apiUrl="/api/course"
      dialog_edit={
        <Edit
          course={{
            id_course: row.original.id_course,
            name: row.original.name,
            school_year: row.original.school_year,
            weekly_hours: row.original.weekly_hours,
            curriculum: row.original.curriculum,
          }}
        />
      }
    />
  );
};

export const columns = ({ showActions }: Props): ColumnDef<Course>[] => {
  const cols: ColumnDef<Course>[] = [
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
      accessorKey: "curriculum",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Curriculum" />;
      },
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
import { DataTableColumnHeader } from "@components/ui/data-table-column-header";
import type { Course } from "@components/types/api";
import type { ColumnDef, Row } from "@tanstack/react-table";
import { DataTableRowActions } from "@/components/ui/data-table-row-actions";
import CourseForm from "./course-form";

interface Props {
  showActions?: boolean;
}

const actions = (row: Row<Course>) => {
  return (
    <DataTableRowActions
      row={row}
      dialogDelete={{
        id_row: "id_course",
        name: "course",
        title: "Delete Course",
        description: "Are you sure you want to delete this course?",
        apiUrl: "/api/courses",
      }}
    >
      {(setOpenEdit) => <CourseForm setOpenEdit={setOpenEdit} row={row} />}
    </DataTableRowActions>
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

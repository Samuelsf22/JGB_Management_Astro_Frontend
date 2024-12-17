import { DataTableColumnHeader } from "@components/ui/data-table-column-header";
import type { Course } from "@components/types/api";
import type { ColumnDef, Row } from "@tanstack/react-table";
import { DataTableRowActions } from "@/components/ui/data-table-row-actions";
import { Edit } from "./dialog-edit";

interface Props {
  showActions?: boolean;
}

const actions = (row: Row<Course>) => {
  return null
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

  return cols;
};
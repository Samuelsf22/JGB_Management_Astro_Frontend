import { DataTableColumnHeader } from "@components/ui/data-table-column-header";
import type { GetEnrollment } from "@components/types/api";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTableRowActions } from "@/components/ui/data-table-row-actions";
import { Edit } from "@services/enrollment/dialog-edit";


export const columns: ColumnDef<GetEnrollment>[] = [
  {
    accessorKey: "id_enrollment",
    header: "id",
    size: 50,
  },
  {
    accessorKey: "student.id_student",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Student Id" />;
    },
    size: 50,
  },
  {
    accessorKey: "student.first_name",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="First Name" />;
    },
  },
  {
    accessorKey: "student.last_name",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Last Name" />;
    },
  },
  {
    accessorKey: "curriculum.id_curriculum",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Curriculum" />;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Status" />;
    },
  },
  {
    accessorKey: "enrollment_date",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Enrollment Date" />;
    },
  },
  {
    accessorFn: (row) => row.enrolled_courses?.[0]?.school_year ?? 0,
    id: "school_year",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Year" />;
    },
  },
];

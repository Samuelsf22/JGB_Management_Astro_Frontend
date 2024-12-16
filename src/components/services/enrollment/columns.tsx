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
  {
    id: "actions",
    cell: ({ row }) => {
      const schoolYear = row.original.enrolled_courses?.[0]?.school_year || "N/A";
      return (
        <DataTableRowActions
          row={row}
          idRow="id_enrollment"
          name="name"
          title="enrollment"
          apiUrl="/api/enrollment"
          dialog_edit={
            <Edit
              enrollment={{
                id_enrollment: row.original.id_enrollment,
                student: row.original.student.id_student,
                curriculum: row.original.curriculum.id_curriculum,
                school_year: Number(schoolYear), // Usamos la constante previamente calculada
                status: row.original.status,
                enrollment_date: String(row.original.enrollment_date),
              }}
            />
          }
        />
      );
    },
  },
];

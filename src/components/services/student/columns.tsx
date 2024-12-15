import { DataTableColumnHeader } from "@components/ui/data-table-column-header";
import type { Student } from "@components/types/api";
import type { ColumnDef } from "@tanstack/react-table";
// import { DataTableRowActions } from "@/components/ui/data-table-row-actions";
// import { Edit } from "./dialog-edit";


export const columns: ColumnDef<Student>[] = [
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
  }

//   {
//     id: "actions",
//     cell: ({ row }) => (
//       <DataTableRowActions
//         row={row}
//         idRow="id_course"
//         name="name"
//         title="course"
//         apiUrl="/api/course"
//         dialog_edit={<Edit/>}
//       />
//     ),
//   },
];

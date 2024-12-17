import { DataTableColumnHeader } from "@components/ui/data-table-column-header";
import type { ScheduleS } from "@components/types/api";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTableRowActions } from "@/components/ui/data-table-row-actions";
import { Edit } from "@services/schedule/dialog-edit";

export const columns: ColumnDef<ScheduleS>[] = [
  {
    accessorKey: "id_schedule",
    header: "id",
    size: 50,
  },
  {
    accessorKey: "day",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Day" />;
    },
    size: 300,
  },
  {
    accessorKey: "classroom_details.name",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Classroom" />;
    },
  },
  {
    accessorKey: "course_details.name",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Course" />;
    },
  },
  {
    accessorKey: "start_time",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Start Time" />;
    },
  },
  {
    accessorKey: "end_time",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="End Time" />;
    },
  },
];

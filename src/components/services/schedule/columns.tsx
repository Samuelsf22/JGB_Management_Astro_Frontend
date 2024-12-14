import { DataTableColumnHeader } from "@components/ui/data-table-column-header";
import type { ScheduleS } from "@components/types/api";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTableRowActions } from "@/components/ui/data-table-row-actions";
import { Edit } from "@/components/services/schedule/dialog-edit";
import { Delete } from "@/components/services/schedule/dialog-delete";
import Schedule from "@/components/ui/Schedule.astro";

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
  {
    id: "actions",
    cell: ({ row }) => (
      <DataTableRowActions
        // row={row}
        dialog_edit={<Edit schedule={{
          id_schedule: row.original.id_schedule,
          classroom: row.original.classroom,
          classroom_details: {
            id_classroom: 0,
            name: row.original.classroom_details.name,
            capacity: 0
          },
          course: row.original.course,
          course_details: null,
          teacher: null,
          day: row.original.day,
          start_time: row.original.start_time,
          end_time: row.original.end_time
        }} onUpdate={function (): void {
          console.log("Schedule updated successfully!");
        } } />}
        dialog_delete={<Delete title="schedule" id={row.original.id_schedule} onDelete={() => console.log("Schedule deleted successfully!")} />}
      />
    ),
  },
];

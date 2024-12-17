import { DataTableColumnHeader } from "@components/ui/data-table-column-header";
import type { Student } from "@components/types/api";
import type { ColumnDef, Row } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

interface Props {
  showActions?: boolean;
}

const AttendanceCell = (row: Row<Student>) => {
  const [isAttended, setIsAttended] = useState(false);

  const handleAttendanceChange = () => {
    // You might want to add API call here to update attendance
    setIsAttended(!isAttended);
  };

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        checked={isAttended}
        onCheckedChange={handleAttendanceChange}
        aria-label="Select attendance"
      />
      <span>{isAttended ? "Attended" : "No Attended"}</span>
    </div>
  );
};

const actions = (row: Row<Student>) => {
  // Previous actions logic (currently commented out)
  return null;
};

export const columns = ({ showActions }: Props): ColumnDef<Student>[] => {
  const cols: ColumnDef<Student>[] = [
    {
      accessorKey: "id_student",
      header: "id",
      size: 50,
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
      accessorKey: "attendance",
      header: "Attendance",
      cell: ({ row }) => AttendanceCell(row),
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

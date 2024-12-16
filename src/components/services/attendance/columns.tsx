import { DataTableColumnHeader } from "@components/ui/data-table-column-header";
import type { Student } from "@components/types/api";
import type { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

interface Props {
  showActions?: boolean;
}

const AttendanceCell = ({ row }: { row: any }) => {
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

const actions = (row: any) => {
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
      cell: AttendanceCell,
    }
  ];

  if (showActions) {
    cols.push({
      accessorKey: "actions",
      cell: actions,
    });
  }

  return cols;
};
import { DataTableColumnHeader } from "@components/ui/data-table-column-header";
import type { Student } from "@components/types/api";
import type { ColumnDef } from "@tanstack/react-table";
import { Input } from "@/components/ui/input2";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

interface Props {
  showActions?: boolean;
}

interface GradesData {
  [key: string]: { [key: string]: number };
}

export const columns = ({ showActions }: Props): ColumnDef<Student>[] => {
  const [grades, setGrades] = useState<GradesData>({});

  const handleGradeChange = (
    studentId: number, 
    assessmentType: string, 
    value: string
  ) => {
    setGrades(prev => ({
      ...prev,
      [studentId]: {
        ...(prev[studentId] || {}),
        [assessmentType]: parseFloat(value) || 0
      }
    }));
  };

  const handleSaveGrades = async () => {
    try {
      const response = await fetch('/api/save-grades', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(grades)
      });

      if (response.ok) {
        toast({
          title: "Grades Saved",
          description: "Grades have been successfully saved.",
          variant: "default"
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to save grades.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive"
      });
    }
  };

  const cols: ColumnDef<Student>[] = [
    {
      accessorKey: "id_student",
      header: "ID",
      size: 50,
    },
    {
      accessorKey: "first_name",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Full Name" />;
      },
      cell: ({ row }) => {
        return `${row.original.first_name} ${row.original.last_name}`;
      },
    },
    // Continuous Assessments
    ...['cont1', 'cont2', 'cont2', 'cont4'].map(cont => ({
      accessorKey: cont,
      header: `${cont.charAt(0).toUpperCase() + cont.slice(1)}`,
      cell: ({ row }: any) => (
        <Input
          type="number"
          min="0"
          max="20"
          step="0.1"
          value={grades[row.original.id_student]?.[cont] || ''}
          onChange={(e) => 
            handleGradeChange(row.original.id_student, cont, e.target.value)
          }
          className="w-13"
        />
      )
    })),
    // Partial Assessments
    ...['p1', 'p2', 'p3'].map(partial => ({
      accessorKey: partial,
      header: `${partial.charAt(0).toUpperCase() + partial.slice(1)}`,
      cell: ({ row }: any) => (
        <Input
          type="number"
          min="0"
          max="20"
          step="0.1"
          value={grades[row.original.id_student]?.[partial] || ''}
          onChange={(e) => 
            handleGradeChange(row.original.id_student, partial, e.target.value)
          }
          className="w-13"
        />
      )
    })),
    // Final Assessment
    {
      accessorKey: "final",
      header: "Final",
      cell: ({ row }: any) => (
        <Input
          type="number"
          min="0"
          max="20"
          step="0.1"
          value={grades[row.original.id_student]?.final || ''}
          onChange={(e) => 
            handleGradeChange(row.original.id_student, 'final', e.target.value)
          }
          className="w-15"
        />
      )
    },
    // Save Button (appears only once)
    {
      id: 'save-grades',
      header: 'Actions',
      cell: () => (
        <Button className="w-10" onClick={handleSaveGrades}>
          Save
        </Button>
      )
    }
  ];

  if (showActions) {
    
  }

  return cols;
};
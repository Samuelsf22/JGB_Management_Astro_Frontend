import { z } from "zod";
import DataForm from "@/components/data-form";
import type { FormField } from "@/components/data-form";
import type { Row } from "@tanstack/react-table";
import type { Course } from "@components/types/api";

const courseSchema = z.object({
  id_course: z.number(),
  name: z
    .string()
    .min(3, { message: "Course name must be at least 3 characters" }),
  school_year: z.string().nonempty(),
  weekly_hours: z
    .number()
    .min(1, { message: "Weekly hours must be at least 1" }),
  curriculum: z.string().nonempty(),
});

type CourseType = z.infer<typeof courseSchema>;

const formFields: FormField<CourseType>[] = [
  {
    name: "name",
    label: "Course Name",
    type: "text",
    description: "Enter the course name",
  },
  {
    name: "school_year",
    label: "School Year",
    type: "text",
    description: "Enter the school year",
  },
  {
    name: "weekly_hours",
    label: "Weekly Hours",
    type: "number",
    description: "Enter the weekly hours",
  },
  {
    name: "curriculum",
    label: "Curriculum",
    type: "text",
    description: "Enter the curriculum",
  },
];

interface Props {
  row: Row<Course>;
  setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const CourseForm: React.FC<Props> = ({ row, setOpenEdit }) => {
  return (
    <DataForm
      setOpenEdit={setOpenEdit}
      row={row}
      formFields={formFields}
      schema={courseSchema}
      defaultValues={{
        name: row.getValue("name") as string,
        school_year: row.getValue("school_year") as string,
        weekly_hours: row.getValue("weekly_hours") as number,
        curriculum: row.getValue("curriculum") as string,
      }}
      dialogTitle="Edit Course"
      dialogDescription="Make changes to the course here. Click save when you're done."
    />
  );
};

export default CourseForm;

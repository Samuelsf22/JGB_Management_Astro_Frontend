import type { Course } from "../../types/api";
import { CardTable } from "../../ui/CardTable";
import { columns } from "@services/course/columns";
interface Props {
  data: Course[];
}

export function TableCourse({ data }: Props) {
  return <CardTable title="Courses List" data={data} columns={columns} />;
}

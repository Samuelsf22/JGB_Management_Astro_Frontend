import type { Course } from "../types/api";
import ActionTable from "./ActionTable";
import { columns } from "@services/course/columns";
interface Props {
  data: Course[];
}

export function TestCourse({ data }: Props) {
  return <ActionTable title="Courses List" data={data} columns={columns} />;
}

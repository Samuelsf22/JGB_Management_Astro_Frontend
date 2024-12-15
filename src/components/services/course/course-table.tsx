import { CardTable } from "../../ui/CardTable";
import { columns } from "@services/course/columns";

export function CourseTable() {
  return <CardTable title="Courses List" url="/api/course" columns={columns} />;
}

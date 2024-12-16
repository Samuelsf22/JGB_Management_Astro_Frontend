import { CardTable } from "../../ui/CardTable";
import { columns } from "@services/enrollment/columns";

export function EnrollmentTable() {
  return <CardTable title="Enrollment List" url="/api/enrollment" columns={columns} />;
}

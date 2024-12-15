import { CardTable } from "@/components/ui/CardTable";
import { columns } from "./columns";

export function StudentTable() {
  return <CardTable title="Student List" url="/api/student" columns={columns} />;
}
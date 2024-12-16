import { CardTable } from "../../ui/CardTable";
import { columns } from "@services/schedule/columns";

export function ScheduleTable() {
  return <CardTable title="Schedule List" url="/api/schedule" columns={columns} />;
}

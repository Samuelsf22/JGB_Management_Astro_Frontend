import type { ScheduleS } from "../../types/api";
import { CardTable } from "../../ui/CardTable";
import { columns } from "@services/schedule/columns";
interface Props {
  data: ScheduleS[];
}

export function TableSchedule() {
  return <CardTable title="Schedule List" url="/api/schedule" columns={columns} />;
}

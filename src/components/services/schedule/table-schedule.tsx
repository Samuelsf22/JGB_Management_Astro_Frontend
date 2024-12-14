import type { ScheduleS } from "../../types/api";
import { CardTable } from "../../ui/CardTable";
import { columns } from "@services/schedule/columns";
interface Props {
  data: ScheduleS[];
}

export function TableSchedule({ data }: Props) {
  return <CardTable title="Schedule List" data={data} columns={columns} />;
}

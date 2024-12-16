import { CardTable } from "@/components/ui/CardTable";
import { columns } from "@services/user/columns";

export function UserTable() {
  return <CardTable title="User List" url="/api/user" columns={columns} />;
}
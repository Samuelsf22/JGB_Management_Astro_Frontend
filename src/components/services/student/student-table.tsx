import { CardTable } from "@/components/ui/CardTable";
import { columns } from "./columns";

interface Props {
  url: string;
  showActions?: boolean;
}

export function StudentTable({ url, showActions = false }: Props) {
  return (
    <CardTable title="Student List" url={url} columns={columns({ showActions })} />
  );
}

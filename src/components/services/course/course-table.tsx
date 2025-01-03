import { CardTable } from "../../ui/CardTable";
import { columns } from "@services/course/columns";
interface Props {
  url: string;
  showActions?: boolean;
}

export function CourseTable({ showActions = false, url }: Props) {
  return <CardTable title="Courses List" url={url} columns={columns({ showActions })} />;
}

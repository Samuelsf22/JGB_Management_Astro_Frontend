import { CardTable } from "@components/ui/CardTable";
import { columns } from "@/components/pages/management/courses/data/columns";
interface Props {
  url: string;
  showActions?: boolean;
}

export function CourseTable({ showActions = false, url }: Props) {
  return <CardTable title="Courses List" url={url} columns={columns({ showActions })} />;
}

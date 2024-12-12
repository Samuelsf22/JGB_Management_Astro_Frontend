import { type ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@components/ui/data-table";

import { Card, CardContent, CardHeader, CardTitle } from "./card";

interface Props<TData, TValue> {
  title: string;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

function ActionTable<TData, TValue>({ title, data, columns }: Props<TData, TValue>) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable data={data} columns={columns} />
      </CardContent>
    </Card>
  );
}
export default ActionTable;

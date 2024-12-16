import { type ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@components/ui/data-table";

import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { useEffect, useState } from "react";

interface Props<TData, TValue> {
  title: string;
  columns: ColumnDef<TData, TValue>[];
  url: string;
}

export function CardTable<TData, TValue>({
  title,
  columns,
  url,
}: Props<TData, TValue>) {
  const [data, setData] = useState<TData[]>([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

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

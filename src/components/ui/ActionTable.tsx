import { type ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@components/ui/data-table";

import { Card, CardContent, CardHeader, CardTitle } from "./card";

interface Props<TData, TValue> {
  title: string;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

function ActionTable<TData, TValue>({
  title,
  data,
  columns,
}: Props<TData, TValue>) {
  // generatedColumns.push(
  //   columnHelper.accessor("name", {
  //     header: ({ column }) => {
  //       return (
  //         <Button
  //           variant="ghost"
  //           className="w-full justify-between uppercase text-xs font-bold"
  //           onClick={() => column.toggleSorting()}
  //         >
  //           Name
  //           <div className="flex flex-col -space-y-2">
  //             <Icon
  //               icon="mdi:chevron-up"
  //               className={`${
  //                 column.getIsSorted() === "desc" ? "text-primary" : ""
  //               }`}
  //               height={18}
  //             />
  //             <Icon
  //               icon="mdi:chevron-down"
  //               className={`${
  //                 column.getIsSorted() === "asc" ? "text-primary" : ""
  //               }`}
  //               height={18}
  //             />
  //           </div>
  //         </Button>
  //       );
  //     },
  //   })
  // );

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

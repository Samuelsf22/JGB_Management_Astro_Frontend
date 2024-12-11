import { createColumnHelper } from "@tanstack/react-table";
import Table from "./Table";

interface Props {
  title: string;
  data: any[];
}

function ActionTable({ title, data }: Props) {
  const columnHelper = createColumnHelper<any>();

  const generatedColumns = data[0]
    ? Object.keys(data[0]).map((key) => {
        const formattedKey = key.replace(/_/g, " ");
        // This is a temporary fix for the id column
        const header = key.startsWith("id_") ? "id" : formattedKey;
        return columnHelper.accessor(key, {
          header: header,
        });
      })
    : [];

  const helper = [
    columnHelper.accessor("action", {
      header: "Action",
      cell: ({ row }) => (
        <div>
          Action
        </div>
      ),
    }),
  ];
  generatedColumns.push(...helper);

  return (
    <div className="rounded-xl border bg-light-background border-light-background-400 dark:bg-dark-background-900 dark:border-dark-background-500 p-2 md:p-4">
      <h1 className="font-semibold text-xl py-4">{title}</h1>
      <Table data={data} columns={generatedColumns} />
    </div>
  );
}
export default ActionTable;

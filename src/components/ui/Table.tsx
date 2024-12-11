import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  type SortingState,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { Icon } from "@iconify-icon/react";

import type { ColumnDef } from "@tanstack/react-table";

interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
}

function Table<T>({ data, columns }: TableProps<T>) {

  const [loading, setLoading] = useState(true);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState<string>("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    columnResizeMode: "onChange",
    state: {
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex-0">
        <div className="relative max-w-xs">
          <input
            type="text"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
            className="py-2 px-3 ps-9 bg-transparent block w-full shadow-sm rounded-lg text-sm focus:z-10 border-light-background-400 focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none  dark:border-dark-foreground-700 dark:focus:border-dark-background-500 dark:focus:ring-dark-foreground-500 placeholder-light-foreground-400 dark:placeholder-dark-foreground-300 transition-colors duration-300 ease-in-out"
            placeholder="Search"
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
            <Icon
              icon="mdi:search"
              className="text-light-foreground-400 dark:text-dark-foreground-300"
            />
          </div>
        </div>
      </div>
      <div className="h-[600px] overflow-y-hidden overflow-x-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-light-background-100 [&::-webkit-scrollbar-thumb]:bg-light-background-300 dark:[&::-webkit-scrollbar-track]:bg-dark-background-900 dark:[&::-webkit-scrollbar-thumb]:bg-dark-background-800">
        <table
          className="w-full divide-y divide-light-background-400 dark:divide-dark-background-500"
          width={table.getTotalSize()}
        >
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="py-3 text-xs font-bold uppercase relative px-2 hover:bg-light-background-100 dark:hover:bg-dark-background-800"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div className="flex items-center justify-between">
                      <span>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </span>
                      <div className="flex flex-col -space-y-2">
                        <Icon
                          icon="mdi:chevron-up"
                          className={`text-light-foreground-400 dark:text-dark-foreground-300 ${
                            header.column.getIsSorted() === "desc"
                              ? "text-primary dark:text-primary"
                              : ""
                          }`}
                          height={18}
                        />
                        <Icon
                          icon="mdi:chevron-down"
                          className={`text-light-foreground-400 dark:text-dark-foreground-300 ${
                            header.column.getIsSorted() === "asc"
                              ? "text-primary dark:text-primary"
                              : ""
                          }`}
                          height={18}
                        />
                      </div>
                    </div>
                    <div
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      className={`absolute top-0 right-0 h-full w-1 cursor-col-resize touch-none hover:bg-light-background-400 hover:dark:bg-dark-background-500 ${
                        header.column.getIsResizing() ? "bg-primary" : ""
                      }`}
                    />
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-light-background-400 dark:divide-dark-background-500">
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="group text-sm text-light-foreground-400 dark:text-dark-foreground-300 hover:bg-light-background-100 dark:hover:bg-dark-background-800 hover:text-primary dark:hover:text-dark-foreground"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-2 py-4"
                    width={cell.column.getSize()}
                  >
                    <span className="line-clamp-1">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center">
        <div className="flex items-center justify-between space-x-2">
          <button
            type="button"
            className="p-2 inline-flex justify-center items-center gap-x-2 text-sm rounded-full focus:outline-none text-light-foreground-400 dark:text-dark-foreground-300 focus:text-primary hover:text-primary dark:hover:text-dark-foreground hover:bg-light-background-100 dark:hover:bg-dark-background-800 dark:focus:text-dark-foreground disabled:opacity-50 disabled:pointer-events-none border border-transparent transition-colors duration-300 ease-in-out"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <Icon icon="mdi:chevron-left" className="" height={22}/>
          </button>

          <button
            type="button"
            className="p-2 inline-flex justify-center items-center gap-x-2 text-sm rounded-full focus:outline-none text-light-foreground-400 dark:text-dark-foreground-300 focus:text-primary hover:text-primary dark:hover:text-dark-foreground hover:bg-light-background-100 dark:hover:bg-dark-background-800 dark:focus:text-dark-foreground disabled:opacity-50 disabled:pointer-events-none border border-transparent transition-colors duration-300 ease-in-out"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <Icon icon="mdi:chevron-right" className="" height={22}/>
          </button>
        </div>
        <div className="text-xs text-gray-500 ms-auto dark:text-neutral-400">
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </div>
      </div>
    </div>
  );
}

export default Table;

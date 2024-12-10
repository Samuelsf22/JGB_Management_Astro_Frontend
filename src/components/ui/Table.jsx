import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { Icon } from "@iconify-icon/react";

function Table({ data, columns }) {
  const [loading, setLoading] = useState(true);
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data: data || [],
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
    onFilteringChange: setFiltering,
  });

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 rounded-xl border bg-light-background border-light-background-400 dark:bg-dark-background-900 dark:border-dark-background-500">
      <div class="flex-0">
        <div class="relative max-w-xs">
          <label for="hs-table-export-search" class="sr-only">
            Search
          </label>
          <input
            type="text"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
            class="py-2 px-3 ps-9 bg-transparent block w-full shadow-sm rounded-lg text-sm focus:z-10 border-light-background-400 focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none  dark:border-dark-foreground-700 dark:focus:border-dark-background-500 dark:focus:ring-dark-foreground-500 placeholder-light-foreground-400 dark:placeholder-dark-foreground-300"
            placeholder="Search for items"
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
            <Icon
              icon="mdi:search"
              className="text-light-foreground-400 dark:text-dark-foreground-300"
            />
          </div>
        </div>
      </div>
      <table
        className="divide-y divide-light-background-400 dark:divide-dark-background-500"
        width={table.getTotalSize()}
      >
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  width={header.getSize()}
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
                            ? "text-primary"
                            : ""
                        }`}
                        height={18}
                      />
                      <Icon
                        icon="mdi:chevron-down"
                        className={`text-light-foreground-400 dark:text-dark-foreground-300 ${
                          header.column.getIsSorted() === "asc"
                            ? "text-primary"
                            : ""
                        }`}
                        height={18}
                      />
                    </div>
                  </div>
                  <div
                    onMouseDown={header.getResizeHandler()}
                    onTouchStart={header.getResizeHandler()}
                    className={`absolute top-0 right-0 h-full w-0.5 cursor-col-resize touch-none hover:bg-light-background-400 dark:bg-dark-background-500 ${
                      header.column.getIsResizing()
                        ? "bg-primary"
                        : ""
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
              className="group text-light-foreground-400 dark:text-dark-foreground-300 hover:bg-light-background-100 dark:hover:bg-dark-background-800 hover:text-primary dark:hover:text-dark-foreground"
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-6 py-4 text-sm"
                  width={cell.column.getSize()}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-2">
        <button
          type="button"
          className="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
          onClick={() => table.previousPage()}
        >
          Previous
        </button>

        <button
          type="button"
          className="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
          onClick={() => table.nextPage()}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Table;

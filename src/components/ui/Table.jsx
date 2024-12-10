import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";

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
    <div className="p-4 min-w-full inline-block align-middle border bg-light-background border-light-background-200 dark:bg-dark-background-900 dark:border-dark-background-800">
      <div class="flex-0">
        <div class="relative max-w-xs">
          <label for="hs-table-export-search" class="sr-only">
            Search
          </label>
          <input
            type="text"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
            class="py-2 px-3 ps-9 bg-transparent block w-full shadow-sm rounded-lg text-sm focus:z-10 border-light-foreground-300 focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none  dark:border-dark-foreground-700 dark:focus:border-dark-foreground-500 dark:focus:ring-dark-foreground-500 placeholder-light-foreground-400 dark:placeholder-dark-foreground-300"
            placeholder="Search for items"
          />
          <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
            <svg
              class="size-4 text-gray-400 dark:text-neutral-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
        </div>
      </div>
      <table className="min-w-full divide-y divide-light-background-400 dark:divide-dark-background-500">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="py-3 text-xs font-bold uppercase text-light-foreground-400 dark:text-dark-foreground-300"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div className="flex items-center justify-between p-8">
                    <span>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </span>

                    <svg
                      class="text-light-foreground-400 dark:text-dark-foreground-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        className={
                          header.column.getIsSorted() === "asc"
                            ? "text-primary"
                            : ""
                        }
                        d="m7 15 5 5 5-5"
                      ></path>
                      <path
                        className={
                          header.column.getIsSorted() === "desc"
                            ? "text-primary"
                            : ""
                        }
                        d="m7 9 5-5 5 5"
                      ></path>
                    </svg>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-light-background-400 dark:divide-dark-background-500">
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="group text-light-foreground-400 dark:text-dark-foreground-300 hover:bg-light-background-200 dark:hover:bg-dark-background-800 hover:text-primary dark:hover:text-dark-foreground"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-6 py-4 text-sm">
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

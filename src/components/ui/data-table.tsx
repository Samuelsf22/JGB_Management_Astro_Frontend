import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { Icon } from "@iconify-icon/react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

import { Input } from "./input";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
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
    if (data) {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="w-full">
        <div className="flex justify-between items-center py-4">
          <div className="relative max-w-xs group text-muted-foreground hover:text-primary focus:text-primary">
            <Input
              type="text"
              value={filtering}
              onChange={(event) => setFiltering(event.target.value)}
              // This will be implemented in the future
              // value={
              //   (table.getColumn("name")?.getFilterValue() as string) ?? ""
              // }
              // onChange={(event) =>
              //   table.getColumn("name")?.setFilterValue(event.target.value)
              // }
              placeholder="Filtering by name..."
              className="ps-9 w-80"
            />
            <div className="absolute inset-y-0 start-0 flex items-center ps-3">
              <Icon icon="mdi:search" />
            </div>
          </div>
          {/* This one too */}
          {/* <DropdownMenu>
            <DropdownMenuTrigger>Columns</DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>
        <div>
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} colSpan={header.colSpan}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} width={cell.column.getSize()}>
                        <span className="line-clamp-1">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </span>
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
            {/* {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected. */}
          </div>
          <div className="space-x-2">
            <button
              type="button"
              className="p-2 inline-flex justify-center items-center gap-x-2 text-sm rounded-full focus:outline-none focus:text-primary hover:text-primary hover:bg-light-background-100 disabled:opacity-50 disabled:pointer-events-none border border-transparent transition-colors duration-300 ease-in-out"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <Icon icon="mdi:chevron-left" height={22} />
            </button>

            <button
              type="button"
              className="p-2 inline-flex justify-center items-center gap-x-2 text-sm rounded-full focus:outline-none text-light-foreground-400 dark:text-dark-foreground-300 focus:text-primary hover:text-primary dark:hover:text-dark-foreground hover:bg-light-background-100 dark:hover:bg-dark-background-800 dark:focus:text-dark-foreground disabled:opacity-50 disabled:pointer-events-none border border-transparent transition-colors duration-300 ease-in-out"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <Icon icon="mdi:chevron-right" height={22} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

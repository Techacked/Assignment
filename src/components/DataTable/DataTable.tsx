import { useState } from "react";

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T extends { id: string | number }>({
  data,
  columns,
  loading,
  selectable,
  onRowSelect,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<Set<string | number>>(
    new Set()
  );
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (col: Column<T>) => {
    if (!col.sortable) return;
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortKey(col.key);
    setSortOrder(newOrder);
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortKey) return 0;
    const col = columns.find((c) => c.key === sortKey);
    if (!col) return 0;
    const valA = a[col.dataIndex];
    const valB = b[col.dataIndex];
    if (valA < valB) return sortOrder === "asc" ? -1 : 1;
    if (valA > valB) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  const toggleSelect = (id: string | number) => {
    const newSet = new Set(selectedRows);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelectedRows(newSet);
    onRowSelect?.(data.filter((row) => newSet.has(row.id)));
  };

  return (
    <div className="overflow-x-auto border rounded-xl shadow-md bg-white dark:bg-gray-900">
      {loading ? (
        <p className="p-6 text-gray-500 animate-pulse">Loading...</p>
      ) : data.length === 0 ? (
        <p className="p-6 text-gray-500">No data available</p>
      ) : (
        <table className="min-w-full border-collapse text-sm">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              {selectable && <th className="p-3"></th>}
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="p-3 text-left font-semibold text-gray-700 dark:text-gray-200 cursor-pointer hover:text-blue-600 transition"
                  onClick={() => handleSort(col)}
                >
                  {col.title}
                  {col.sortable && sortKey === col.key
                    ? sortOrder === "asc"
                      ? " 🔼"
                      : " 🔽"
                    : ""}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, idx) => (
              <tr
                key={row.id}
                className={`transition-colors ${
                  idx % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"
                } hover:bg-blue-50 dark:hover:bg-gray-700`}
              >
                {selectable && (
                  <td className="p-3">
                    <input
                      type="checkbox"
                      checked={selectedRows.has(row.id)}
                      onChange={() => toggleSelect(row.id)}
                      aria-label="Select row"
                      className="accent-blue-600 w-4 h-4"
                    />
                  </td>
                )}
                {columns.map((col) => (
                  <td key={col.key} className="p-3 text-gray-700 dark:text-gray-300">
                    {String(row[col.dataIndex])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

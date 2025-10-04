import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { DataTable } from "./DataTable";
import type { Column } from "./DataTable";

interface User {
  id: number;
  name: string;
}

const mockData: User[] = [
  { id: 1, name: "Kasif" },
  { id: 2, name: "Neha" },
];

const mockColumns: Column<User>[] = [{ key: "name", title: "Name", dataIndex: "name" }];

test("renders table with data", () => {
  render(<DataTable data={mockData} columns={mockColumns} />);
  expect(screen.getByText("Kasif")).toBeInTheDocument();
});

test("shows empty state", () => {
  render(<DataTable data={[]} columns={mockColumns} />);
  expect(screen.getByText("No data available")).toBeInTheDocument();
});

test("handles row selection", () => {
  const handleSelect = vi.fn();
  render(
    <DataTable
      data={mockData}
      columns={mockColumns}
      selectable
      onRowSelect={handleSelect}
    />
  );
  fireEvent.click(screen.getAllByRole("checkbox")[0]);
  expect(handleSelect).toHaveBeenCalled();
});

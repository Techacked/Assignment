import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { InputField } from "./InputField";

test("renders InputField with label", () => {
  render(<InputField label="Username" placeholder="Enter username" />);
  expect(screen.getByLabelText("Username")).toBeInTheDocument();
});

test("shows error message when invalid", () => {
  render(
    <InputField
      label="Email"
      invalid
      errorMessage="Invalid email"
    />
  );
  expect(screen.getByText("Invalid email")).toBeInTheDocument();
});

test("calls onChange when typing", () => {
  const handleChange = vi.fn();
  render(<InputField label="Name" onChange={handleChange} />);
  fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Kasif" } });
  expect(handleChange).toHaveBeenCalled();
});

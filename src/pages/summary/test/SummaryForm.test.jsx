import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
describe("SummaryForm", () => {
  test("Initial conditions", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: "I agree to Terms and Conditions"
    });
    expect(checkbox).not.toBeChecked();

    const button = screen.getByRole("button", { name: "Confirm Order" });
    expect(button).toBeDisabled();
  });
  test("checkBox should toggle button", () => {
    render(<SummaryForm />);

    const checkBox = screen.getByRole("checkbox", {
      name: "I agree to Terms and Conditions"
    });
    const button = screen.getByRole("button", { name: "Confirm Order" });

    expect(button).toBeDisabled();

    fireEvent.click(checkBox);
    expect(button).toBeEnabled();

    fireEvent.click(checkBox);
    expect(button).toBeDisabled();
  });
});

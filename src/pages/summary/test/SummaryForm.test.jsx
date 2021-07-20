import {
  render,
  screen,
  waitForElementToBeRemoved
} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

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

    userEvent.click(checkBox);
    expect(button).toBeEnabled();

    userEvent.click(checkBox);
    expect(button).toBeDisabled();
  });

  test("popover responds to hover", async () => {
    render(<SummaryForm />);
    const nullPopup = screen.queryByText(
      /no ice cream will actually be delivered/i
    );

    expect(nullPopup).not.toBeInTheDocument();

    const termsAndConditions = screen.getByText(/terms and conditions/i);

    userEvent.hover(termsAndConditions);
    const popover = screen.getByText(
      /no ice cream will actually be delivered/i
    );
    expect(popover).toBeInTheDocument();

    userEvent.unhover(termsAndConditions);
    await waitForElementToBeRemoved(() =>
      screen.queryByText(/no ice cream will actually be delivered/i)
    );
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";

test("order phases for happy path", async () => {
  //render App
  render(<App />);

  // add ice cream scoops and toppings
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla"
  });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "1");
  const mmsInput = await screen.findByRole("checkbox", { name: "M&Ms" });
  userEvent.click(mmsInput);

  // find a click order button
  const orderSummaryButton = screen.getByRole("button", {
    name: "Move to Order Summary"
  });
  userEvent.click(orderSummaryButton);

  // check summary information based on order
  const orderSummary = screen.getByText(
    "Your order consists of 1 scoop of vanilla, and M&Ms topping.",
    { exact: false }
  );
  expect(orderSummary).toBeInTheDocument();

  // accept terms and conditions and click button to confirm order
  const termsAndConditions = screen.getByRole("checkbox", {
    name: /terms and conditions/i
  });
  userEvent.click(termsAndConditions);
  const orderButton = screen.getByRole("button", { name: "Confirm Order" });
  userEvent.click(orderButton);

  // confirm order number on confirmation page
  const orderNumber = await screen.findByText(/your order number is/i);
  expect(orderNumber).toBeInTheDocument();

  // click "new order" button on confirmation page
  const newOrderButton = screen.getByRole("button", { name: "New Order" });
  userEvent.click(newOrderButton);

  // check that scoops and toppings subtotals have been reset
  const scoopsSubtotal = await screen.findByText("Scoops total: $", {
    exact: false
  });
  expect(scoopsSubtotal).toHaveTextContent("0.00");
  const toppingsSubtotal = await screen.findByText("Toppings total: $", {
    exact: false
  });
  expect(toppingsSubtotal).toHaveTextContent("0.00");

  // do we need to await anything to avoid test errors?
});

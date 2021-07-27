import Options from "./Options";
import { useOrderDetails } from "../../contexts/OrderDetails";

export default function OrderEntry({ updateOrderStatus }) {
  const [orderDetails] = useOrderDetails();

  return (
    <div>
      <h1>Design Your Sundae!</h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand Total: {orderDetails.totals.grandTotal}</h2>
      <button
        onClick={() => updateOrderStatus("summary")}
        disabled={orderDetails.totals.scoops === "$0.00"}
      >
        Move to Order Summary
      </button>
    </div>
  );
}

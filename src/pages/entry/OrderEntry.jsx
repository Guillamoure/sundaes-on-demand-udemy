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
      <button onClick={() => updateOrderStatus("summary")}>
        Move to Order Summary
      </button>
    </div>
  );
}

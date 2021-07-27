import { useOrderDetails } from "../../contexts/OrderDetails";
import SummaryForm from "./SummaryForm";

export default function OrderSummary({ updateOrderStatus }) {
  const [orderDetails] = useOrderDetails();

  const displayOrderSummary = () => {
    let order = "Your order consists of ";
    for (let scoop of orderDetails.scoops) {
      order += `${scoop[1]} scoop${scoop[1] === 1 ? "" : "s"} of ${scoop[0]}, `;
    }
    for (let topping of orderDetails.toppings) {
      order += `and ${topping[0]} topping, `;
    }
    order = order.substring(0, order.length - 2);
    order += ".";
    return order;
  };

  return (
    <section>
      {displayOrderSummary()}
      <SummaryForm updateOrderStatus={updateOrderStatus} />
    </section>
  );
}

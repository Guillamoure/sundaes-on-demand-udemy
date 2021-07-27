import axios from "axios";
import { useEffect, useState } from "react";
import { useOrderDetails } from "../../contexts/OrderDetails";

export default function OrderConfirmation({ updateOrderStatus }) {
  const resetOrder = useOrderDetails()[2];

  const [orderNumber, setOrderNumber] = useState(null);

  useEffect(() => {
    axios.post(`http://localhost:3030/orders`).then(res => {
      setOrderNumber(res.data.orderNumber);
    });
  }, []);

  const newOrderClick = () => {
    updateOrderStatus("selection");
    resetOrder();
  };

  return (
    <section>
      <p>
        {orderNumber === null
          ? "Loading..."
          : `Your order number is ${orderNumber}`}
      </p>
      <button onClick={newOrderClick}>New Order</button>
    </section>
  );
}

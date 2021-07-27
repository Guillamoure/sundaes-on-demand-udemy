import Container from "react-bootstrap/Container";
import OrderEntry from "./pages/entry/OrderEntry";
import OrderSummary from "./pages/summary/OrderSummary";
import OrderConfirmation from "./pages/confirmation/OrderConfirmation";
import { OrderDetailsProvider } from "./contexts/OrderDetails";
import { useState } from "react";

function App() {
  const [orderStatus, updateOrderStatus] = useState("selection");

  let Page = OrderEntry;
  if (orderStatus === "summary") {
    Page = OrderSummary;
  } else if (orderStatus === "confirmation") {
    Page = OrderConfirmation;
  }

  return (
    <Container>
      <OrderDetailsProvider>
        <Page updateOrderStatus={updateOrderStatus} />
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;

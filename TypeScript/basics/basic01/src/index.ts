type Order =
  | { status: "delivered"; deliveryDate: string }
  | { status: "cancelled"; reason: string };

function getOrderInfo(order: Order): string {
  if (order.status === "delivered") {
    return `Delivered on ${order.deliveryDate}`;
  } else {
    return `Cancelled ${order.reason}`;
  }
}

console.log(getOrderInfo({ status: "delivered", deliveryDate: "21 August" }));
console.log(
  getOrderInfo({
    status: "cancelled",
    reason: "duniya khatam ho gyi aadhe raaste me",
  }),
);

interface Order {
  id: number;
  customer: string;
  amount: number;
  status: "paid" | "pending" | "cancelled";
}

const orders: Order[] = [
  { id: 1, customer: "Ali", amount: 2500, status: "paid" },
  { id: 2, customer: "Sara", amount: 4000, status: "pending" },
  { id: 3, customer: "John", amount: 6500, status: "paid" },
  { id: 4, customer: "Ayan", amount: 3000, status: "cancelled" },
];

function getOrderSummary(): {
  totalOrders: number;
  totalAmount: number;
  paidAmount: number;
} {
  return orders.reduce(
    (sum, { amount, status }) => {
      return {
        totalAmount: sum.totalAmount + amount,
        totalOrders: sum.totalOrders + 1,
        paidAmount:
          status === "paid" ? sum.paidAmount + amount : sum.paidAmount,
      };
    },
    {
      totalAmount: 0,
      totalOrders: 0,
      paidAmount: 0,
    },
  );
}

console.log(getOrderSummary());

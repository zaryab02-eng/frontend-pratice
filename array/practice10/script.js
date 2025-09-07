const customers = [
  { id: 1, name: "John", membershipLevel: "gold" },
  { id: 2, name: "Sarah", membershipLevel: "silver" },
  { id: 3, name: "Mike", membershipLevel: "bronze" },
];

const orders = [
  { customerId: 1, item: "Laptop", amount: 1200, status: "shipped" },
  { customerId: 1, item: "Mouse", amount: 25, status: "delivered" },
  { customerId: 2, item: "Phone", amount: 800, status: "shipped" },
  { customerId: 3, item: "Tablet", amount: 300, status: "cancelled" },
];

// Goal: Show total spent by each customer on "delivered" or "shipped" orders only
// Expected: ["John (Gold) spent $1225", "Sarah (Silver) spent $800", "Mike (Bronze) spent $0"]

const result = customers.map((customer) => {
  const filteredOrder = orders.filter(
    (order) => order.customerId === customer.id
  );

  const orderSuccefull = filteredOrder.filter(
    (orderDone) =>
      orderDone.status === "shipped" || orderDone.status === "delivered"
  );

  const totalSpent = orderSuccefull.reduce(
    (sum, orderSuccefull) => sum + orderSuccefull.amount,
    0
  );
  return `${customer.name} (${
    customer.membershipLevel.charAt(0).toUpperCase() +
    customer.membershipLevel.slice(1)
  }) spent $${totalSpent}`;
});

console.log(result);

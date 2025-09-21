const customers = [
  { id: 1, name: "Sarah", tier: "gold", city: "NYC" },
  { id: 2, name: "John", tier: "silver", city: "LA" },
  { id: 3, name: "Emma", tier: "gold", city: "NYC" },
  { id: 4, name: "Mike", tier: "bronze", city: "Chicago" },
];

const orders = [
  { customerId: 1, amount: 120, status: "shipped" },
  { customerId: 1, amount: 80, status: "delivered" },
  { customerId: 2, amount: 200, status: "delivered" },
  { customerId: 2, amount: 50, status: "cancelled" },
  { customerId: 3, amount: 300, status: "delivered" },
  { customerId: 4, amount: 90, status: "shipped" },
];

// Goal: Show each customer's total spent on DELIVERED orders only
// Expected format: "Sarah (Gold-NYC): $200.00"
// Only include customers who have delivered orders

// Your code here:

const result = customers
  .map((customer) => {
    const customerOrders = orders.filter(
      (order) => order.customerId === customer.id
    );
    const deliveredItem = customerOrders.filter(
      (delivered) => delivered.status === "delivered"
    );
    const totalAmount = deliveredItem.reduce(
      (amount, total) => amount + total.amount,
      0
    );
    if (totalAmount === 0) return null;
    return `${customer.name} (${
      customer.tier.charAt(0).toUpperCase() + customer.tier.slice(1)
    }-${
      customer.city.charAt(0).toUpperCase() + customer.city.slice(1)
    }): $${totalAmount.toFixed(2)}`;
  })
  .filter((result) => result !== null);
console.log(result);

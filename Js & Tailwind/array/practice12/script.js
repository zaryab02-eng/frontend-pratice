const menuItems = [
  { id: 1, name: "Pizza", category: "main", price: 12, available: true },
  { id: 2, name: "Burger", category: "main", price: 10, available: false },
  { id: 3, name: "Salad", category: "appetizer", price: 8, available: true },
  { id: 4, name: "Cake", category: "dessert", price: 6, available: true },
];

const orders = [
  { itemId: 1, quantity: 2, customerName: "John" },
  { itemId: 1, quantity: 1, customerName: "Sarah" },
  { itemId: 3, quantity: 3, customerName: "Mike" },
  { itemId: 4, quantity: 1, customerName: "Emma" },
];

// Goal: Show total revenue per menu item (only for available items)
// Expected: ["Pizza earned $36", "Salad earned $24", "Cake earned $6"]
// (Burger is not available, so excluded)

const result = menuItems
  .filter((item) => item.available === true)
  .map((item) => {
    const itemOrder = orders.filter((order) => order.itemId === item.id);
    const totalRevnue = itemOrder.reduce((sum, order) => {
      return sum + order.quantity * item.price;
    }, 0);
    return `${item.name} earned $${totalRevnue}`;
  });

console.log(result);

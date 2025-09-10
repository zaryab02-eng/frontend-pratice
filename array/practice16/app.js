const products = [
  { id: 1, name: "Laptop", category: "electronics", price: 999 },
  { id: 2, name: "Mouse", category: "electronics", price: 25 },
  { id: 3, name: "Shirt", category: "clothing", price: 30 },
  { id: 4, name: "Jeans", category: "clothing", price: 80 },
];

const sales = [
  { productId: 1, quantity: 2, discount: 0.1 }, // Laptop: 2 * 999 * 0.9 = 1798.2
  { productId: 1, quantity: 1, discount: 0.05 }, // Laptop: 1 * 999 * 0.95 = 949.05
  { productId: 2, quantity: 5, discount: 0 }, // Mouse: 5 * 25 * 1 = 125
  { productId: 3, quantity: 3, discount: 0.2 }, // Shirt: 3 * 30 * 0.8 = 72
  { productId: 4, quantity: 1, discount: 0.15 }, // Jeans: 1 * 80 * 0.85 = 68
];

// Goal: Group by category and create summary objects:
// Expected: [
//   { category: "electronics", totalRevenue: 2872.25, itemsSold: 8 },
//   { category: "clothing", totalRevenue: 140.00, itemsSold: 4 }
// ]
// Revenue = (price * quantity) * (1 - discount)

// Your code here:

const result = products.map((product) => {
  const salesData = sales.filter((sale) => sale.productId === product.id);
});

const products = [
  { name: "Laptop", price: 50000, stock: 5 },
  { name: "Mouse", price: 1000, stock: 0 },
  { name: "Keyboard", price: 2000, stock: 10 },
];

function inStockProducts() {
  const inStock = products.filter(({ stock }) => stock > 0);
  return inStock.map(({ name }) => name);
}

console.log(inStockProducts());

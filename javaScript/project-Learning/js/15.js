const products = [
  { name: "Laptop", price: 50000, stock: 5 },
  { name: "Mouse", price: 1000, stock: 0 },
  { name: "Keyboard", price: 2000, stock: 10 },
  { name: "Monitor", price: 12000, stock: 0 },
];

const inStock = products
  .filter(({ stock }) => stock > 0)
  .map(({ name }) => name);

console.log(inStock);

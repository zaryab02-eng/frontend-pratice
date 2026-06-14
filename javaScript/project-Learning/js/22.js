const products = [
  { name: "Laptop", price: 50000, stock: 5 },
  { name: "Mouse", price: 1000, stock: 0 },
  { name: "Keyboard", price: 2000, stock: 8 },
];

const result = products
  .filter((product) => product.stock > 0)
  .sort((a, b) => b.price - a.price)
  .reduce((current, product) => product.price + current, 0);

console.log(result);

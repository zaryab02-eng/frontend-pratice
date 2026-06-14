const products = [
  { name: "Laptop", price: 50000, stock: 5 },
  { name: "Mouse", price: 1000, stock: 0 },
  { name: "Keyboard", price: 2000, stock: 8 },
];

// const winner = products
//   .filter((product) => product.stock > 0)
//   .reduce((total, product) => total + product.price, 0);

// console.log(winner);

const result = products
  .sort((a, b) => a.price - b.price)
  .map((product) => product.name);

console.log(result);

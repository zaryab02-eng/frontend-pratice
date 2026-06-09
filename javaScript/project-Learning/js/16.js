const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2000 },
];

const totalSum = products.reduce((current, product) => {
  current = current.price + product.price;
}, products[0]);

console.log(totalSum);

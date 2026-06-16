const products = [
  { name: "Laptop", price: 65000 },
  { name: "Phone", price: 30000 },
  { name: "Tablet", price: 20000 },
];
const totalPrice = products.reduce((current, { price }) => current + price, 0);
console.log(totalPrice);

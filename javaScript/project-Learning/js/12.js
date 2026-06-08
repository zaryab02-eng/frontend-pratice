const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2000 },
];

const newArr = products.map((product) => {
  const { price } = product;
  return price;
});

console.log(newArr);

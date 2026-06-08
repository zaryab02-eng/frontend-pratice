const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2000 },
];

const newArr = products.map((product) => {
  const { name } = product;
  return name;
});
console.log(newArr);

const cart = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2000 },
  { name: "Monitor", price: 8000 },
];

function getProductCount() {
  return cart.reduce((count) => {
    return (count = count + 1);
  }, 0);
}

console.log(getProductCount());

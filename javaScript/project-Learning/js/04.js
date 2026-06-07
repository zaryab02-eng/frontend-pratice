const cart = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2000 },
  { name: "Monitor", price: 8000 },
];

function getTotalCartValue() {
  return cart.reduce((sum, item) => {
    return sum + item.price;
  }, 0);
}

function getProductCount() {
  return cart.reduce((num) => {
    return num + 1;
  }, 0);
}

console.log(getTotalCartValue());
console.log(getProductCount());

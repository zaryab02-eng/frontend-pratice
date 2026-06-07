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

console.log(getTotalCartValue());

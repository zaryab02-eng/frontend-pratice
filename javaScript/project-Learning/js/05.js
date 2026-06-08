const cart = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2000 },
  { name: "Monitor", price: 8000 },
];

function getMostExpensiveProduct() {
  return cart.reduce((highest, num) => {
    if (num.price > highest.price) {
      return num;
    }
    return highest;
  }, cart[0]);
}

console.log(getMostExpensiveProduct());

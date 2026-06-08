const cart = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2000 },
  { name: "Monitor", price: 8000 },
];

function getCheapestProduct() {
  return cart.reduce((lowest, num) => {
    if (num.price < lowest.price) {
      return num;
    }
    return lowest;
  }, cart[0]);
}

console.log(getCheapestProduct());

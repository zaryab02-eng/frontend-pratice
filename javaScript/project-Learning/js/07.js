const cart = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2000 },
  { name: "Monitor", price: 8000 },
];

function getCartSummary() {
  return cart.reduce(
    (obj, num) => {
      obj.totalPrice = obj.totalPrice + num.price;
      obj.productCount = obj.productCount + 1;
      return obj;
    },
    { totalPrice: 0, productCount: 0 },
  );
}

console.log(getCartSummary());

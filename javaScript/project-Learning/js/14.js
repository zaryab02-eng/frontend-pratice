const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2000 },
];

function nameAndPrice() {
  return products.map(({ name, price }) => `${name} - ₹${price}`);
}

console.log(nameAndPrice());

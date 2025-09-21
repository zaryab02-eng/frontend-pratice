const products = [
  { name: "Laptop", price: 800, inStock: true },
  { name: "Mouse", price: 25, inStock: true },
  { name: "Keyboard", price: 45, inStock: false },
  { name: "Headphones", price: 35, inStock: true },
  { name: "Monitor", price: 200, inStock: true },
];

const result = products
  .filter((product) => product.price < 50 && product.inStock === true)
  .map((product) => {
    return `${product.name} - ${product.price.toFixed(2)}`;
  });

console.log(result);

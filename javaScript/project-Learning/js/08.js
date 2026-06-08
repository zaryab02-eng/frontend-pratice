const products = [
  { name: "Laptop", price: 50000, stock: 5 },
  { name: "Mouse", price: 1000, stock: 0 },
  { name: "Keyboard", price: 2000, stock: 10 },
  { name: "Monitor", price: 8000, stock: 3 },
  { name: "Tablet", price: 25000, stock: 0 },
];

function insStockAboveFiveThousand() {
  const filteredProduct = products.filter((product) => {
    if (product.stock > 0 && product.price > 5000) {
      return product;
    }
  });
  return filteredProduct.reduce((current, num) => {
    return (current = current + num.price);
  }, 0);
}

console.log(insStockAboveFiveThousand());

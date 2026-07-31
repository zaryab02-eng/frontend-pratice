const products = [
  { id: 1, name: "Laptop", stock: 12, price: 65000 },
  { id: 2, name: "Mouse", stock: 0, price: 800 },
  { id: 3, name: "Keyboard", stock: 5, price: 1500 },
  { id: 4, name: "Monitor", stock: 0, price: 12000 },
];

function updateProductPrice(products, proId, newPrice) {
  const matchedProduct = products.filter((product) => product.id === proId);
  return matchedProduct.map((product) => (product.price = newPrice));
}

console.log(updateProductPrice(products, 3, 2000));

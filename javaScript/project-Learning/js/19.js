const products = [
  { name: "Laptop", stock: 5 },
  { name: "Mouse", stock: 10 },
  { name: "Keyboard", stock: 8 },
];

const result = products.reduce(
  (current, product) => {
    return {
      totalStock: current.totalStock + product.stock,
      totalProducts: current.totalProducts + 1,
    };
  },
  {
    totalStock: 0,
    totalProducts: 0,
  },
);

result.averageStock = result.totalStock / result.totalProducts;

console.log(result);

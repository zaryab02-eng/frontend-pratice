const products = [
  { name: "Laptop", stock: 5, price: 50000 },
  { name: "Mouse", stock: 10, price: 1000 },
  { name: "Keyboard", stock: 8, price: 2000 },
];

const result = products.reduce(
  (current, product) => {
    return {
      totalStock: product.stock + current.totalStock,
      totalProducts: current.totalProducts + 1,
      mostStock:
        product.stock > current.mostStock ? product : current.mostStock,
    };
  },
  {
    totalStock: 0,
    totalProducts: 0,
    mostStock: products[0],
  },
);

console.log(result);

const products = [{ stock: 5 }, { stock: 8 }, { stock: 3 }];

const result = products.reduce(
  (current, product) => {
    return {
      totalProduct: current.totalProduct + product.stock,
    };
  },
  {
    totalProduct: 0,
  },
);

console.log(result);

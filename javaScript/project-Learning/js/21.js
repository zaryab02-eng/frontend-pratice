const products = [
  { name: "Laptop", stock: 5, price: 50000 },
  { name: "Mouse", stock: 0, price: 1000 },
  { name: "Keyboard", stock: 8, price: 2000 },
];

const result = products.reduce(
  (current, product) => {
    return {
      totalPrice: product.price + current.totalPrice,
      totalStock: product.stock + current.totalStock,
      inStockCount:
        product.stock > 0 ? current.inStockCount + 1 : current.inStockCount,
      outOfStockCount:
        product.stock === 0
          ? current.outOfStockCount + 1
          : current.outOfStockCount,
      highestPriceProduct:
        product.price > current.highestPriceProduct.price
          ? product
          : current.highestPriceProduct,
      cheapestProduct:
        product.price < current.cheapestProduct.price
          ? product
          : current.cheapestProduct,
    };
  },
  {
    totalPrice: 0,
    totalStock: 0,
    inStockCount: 0,
    outOfStockCount: 0,
    highestPriceProduct: products[0],
    cheapestProduct: products[0],
  },
);

console.log(result);

const products = [
  { name: "Laptop", stock: 5, price: 50000 },
  { name: "Mouse", stock: 0, price: 1000 },
  { name: "Keyboard", stock: 8, price: 2000 },
];

const result = products.reduce(
  (current, product) => {
    return {
      totalPrice: product.price + current.totalPrice,
      availableProducts:
        product.stock > 0
          ? [...current.availableProducts, product.name]
          : current.availableProducts,
    };
  },
  {
    totalPrice: 0,
    availableProducts: [],
  },
);

console.log(result);

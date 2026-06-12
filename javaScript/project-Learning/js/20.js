// const products = [
//   { name: "Laptop", stock: 5, price: 50000 },
//   { name: "Mouse", stock: 10, price: 1000 },
//   { name: "Keyboard", stock: 8, price: 2000 },
// ];

// const result = products.reduce(
//   (current, product) => {
//     return {
//       totalStock: product.stock + current.totalStock,
//       totalProducts: current.totalProducts + 1,
//       mostStock:
//         product.stock > current.mostStock.stock ? product : current.mostStock,
//     };
//   },
//   {
//     totalStock: 0,
//     totalProducts: 0,
//     mostStock: products[0],
//   },
// );

// console.log(result);

// const products = [
//   { name: "Laptop", stock: 5, price: 50000 },
//   { name: "Mouse", stock: 10, price: 1000 },
//   { name: "Keyboard", stock: 8, price: 2000 },
// ];

// const winner = products.reduce(
//   (current, product) => {
//     return {
//       totalPrice: product.price + current.totalPrice,
//       cheapestProduct:
//         product.price < current.cheapestProduct.price
//           ? product
//           : current.cheapestProduct,
//     };
//   },
//   {
//     totalPrice: 0,
//     cheapestProduct: products[0],
//   },
// );

// console.log(winner);

const products = [
  { name: "Laptop", stock: 5, price: 50000 },
  { name: "Mouse", stock: 10, price: 1000 },
  { name: "Keyboard", stock: 8, price: 2000 },
];

const winner = products.reduce(
  (current, product) => {
    return {
      totalPrice: product.price + current.totalPrice,
      totalStock: product.stock + current.totalStock,
      cheapestProduct:
        product.price < current.cheapestProduct.price
          ? product
          : current.cheapestProduct,
    };
  },
  {
    totalPrice: 0,
    totalStock: 0,
    cheapestProduct: products[0],
  },
);

console.log(winner);

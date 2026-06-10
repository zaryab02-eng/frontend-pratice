// const products = [{ stock: 5 }, { stock: 8 }, { stock: 3 }];

// const result = products.reduce(
//   (current, product) => {
//     return {
//       totalProduct: current.totalProduct + product.stock,
//     };
//   },
//   {
//     totalProduct: 0,
//   },
// );

// console.log(result);

// const products = [{ stock: 5 }, { stock: 8 }, { stock: 3 }];

// function productSummary() {
//   return products.reduce(
//     (current, product) => {
//       return {
//         totalProducts: current.totalProducts + 1,
//         totalStock: current.totalStock + product.stock,
//       };
//     },
//     {
//       totalProducts: 0,
//       totalStock: 0,
//     },
//   );
// }
// console.log(productSummary());

// const products = [
//   { name: "Laptop", price: 70000 },
//   { name: "Mouse", price: 500 },
//   { name: "Keyboard", price: 2000 },
// ];

// const result = products.reduce(
//   (current, product) => {
//     return {
//       totalPrice: current.totalPrice + product.price,
//     };
//   },
//   {
//     totalPrice: 0,
//   },
// );
// console.log(result);

const products = [
  { name: "Laptop", price: 70000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 2000 },
];

const highestPriceProduct = products.reduce((current, product) => {
  if (product.price > current.price) {
    return product;
  } else {
    return current;
  }
}, products[0]);

const mostExpensive = {
  mostExpensive: highestPriceProduct.name,
};

console.log(mostExpensive);

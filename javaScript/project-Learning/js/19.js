// const products = [
//   { name: "Laptop", stock: 5 },
//   { name: "Mouse", stock: 10 },
//   { name: "Keyboard", stock: 8 },
// ];

// const result = products.reduce(
//   (current, product) => {
//     return {
//       totalStock: current.totalStock + product.stock,
//       totalProducts: current.totalProducts + 1,
//     };
//   },
//   {
//     totalStock: 0,
//     totalProducts: 0,
//   },
// );

// result.averageStock = result.totalStock / result.totalProducts;

// console.log(result);

// const products = [
//   { name: "Laptop", stock: 5 },
//   { name: "Mouse", stock: 10 },
//   { name: "Keyboard", stock: 8 },
// ];

// const winner = products.reduce((current, product) => {
//   if (product.stock > current.stock) {
//     return product;
//   }
//   return current;
// }, products[0]);

// const result = {
//   mostStock: winner,
// };

// console.log(result);

const products = [
  { name: "Laptop", stock: 5, price: 50000 },
  { name: "Mouse", stock: 10, price: 1000 },
  { name: "Keyboard", stock: 8, price: 2000 },
];

const winner = products.reduce((current, product) => {
  if (product.stock > current.stock) {
    return product;
  }
  return current;
}, products[0]);

const StockTotal = products.reduce((current, product) => {
  return product.stock + current;
}, 0);

const result = {
  totalStock: StockTotal,
  mostStock: winner,
};

console.log(result);

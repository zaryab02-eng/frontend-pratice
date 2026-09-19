interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

const products: Product[] = [
  { id: 1, name: "Keyboard", price: 2500, inStock: true },
  { id: 2, name: "Mouse", price: 1200, inStock: false },
  { id: 3, name: "Monitor", price: 15000, inStock: true },
];

// function addProduct(newProduct: Product): Product[] {
//   return [...products, newProduct];
// }

// function updateStock(id: number, stockStatus: boolean): Product[] {
//   return products.map((product) => {
//     if (product.id === id) {
//       return {
//         ...product,
//         inStock: stockStatus,
//       };
//     }
//     return product;
//   });
// }

// function deleteProduct(id: number): Product[] {
//   return products.filter((product) => product.id !== id);
// }

// console.log(updateStock(2, true));
// console.log(addProduct({ id: 4, name: "CPU", price: 4000, inStock: true }));
// console.log(deleteProduct(3));

function getProduct(id: number): Product | undefined {
  return products.find((product) => id === product.id);
}

console.log(getProduct(2));

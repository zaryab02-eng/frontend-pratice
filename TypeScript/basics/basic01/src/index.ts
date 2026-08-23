// function calculateTotal(
//   price: number,
//   quantity: number,
//   discount: number,
// ): number {
//   let total = price * quantity;
//   let discntAmnt = (total * discount) / 100;
//   return total - discntAmnt;
// }

// console.log(calculateTotal(1000, 2, 10));

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   inStock: boolean;
// }

// let product: Product = {
//   id: 2,
//   name: "Keyboard",
//   price: 1499,
//   inStock: true,
// };

// console.log(product);

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  inStock: boolean;
}

const product: Product = {
  id: 1,
  name: "Keyboard",
  price: 1499,
  inStock: true,
};

console.log(product);

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

function updateStock(id: number, status: boolean): Product[] {
  return products.map((product) => {
    if (product.id === id) {
      return {
        ...product,
        inStock: status,
      };
    }
    return product;
  });
}

console.log(updateStock(2, true));

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

function getInStockCount(): number {
  return products.reduce((sum, { inStock }) => {
    if (inStock === true) {
      return sum + 1;
    } else {
      return sum;
    }
  }, 0);
}

console.log(getInStockCount());

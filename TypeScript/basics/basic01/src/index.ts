type InventoryItem<T> = {
  id: number;
  item: T;
  quantity: number;
};

type Product = {
  name: string;
  price: number;
};

const laptopStock: InventoryItem<Product> = {
  id: 1,
  item: { name: "Laptop", price: 50000 },
  quantity: 5,
};

console.log(laptopStock);

interface Product {
  id: number;
  name: string;
  price: number;
}

type ProductStatus = "Available" | "Sold";

interface InventoryItem {
  product: Product;
  status: ProductStatus;
}

function proInventory(): InventoryItem {
  return {
    product: {
      id: 101,
      name: "parle",
      price: 50,
    },
    status: "Available",
  };
}

console.log(proInventory());

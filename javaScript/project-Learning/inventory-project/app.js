const products = [
  {
    id: 1,
    name: "Keyboard",
    category: "Electronics",
    price: 1200,
    stock: 15,
  },
  {
    id: 2,
    name: "Mouse",
    category: "Electronics",
    price: 500,
    stock: 30,
  },
  {
    id: 3,
    name: "Monitor",
    category: "Electronics",
    price: 8000,
    stock: 8,
  },
  { id: 4, name: "Notebook", category: "Stationery", price: 80, stock: 50 },
  { id: 5, name: "USB Cable", category: "Electronics", price: 250, stock: 3 },
];

function addProduct(id, name, category, price, stock) {
  const newProduct = {
    id,
    name,
    category,
    price,
    stock,
  };
  products.push(newProduct);
}

addProduct(6, "Headphones", "Electronics", 2500, 12);

function showProducts() {
  products.forEach((product) => {
    console.log(`${product.id} - ${product.name}`);
  });
}

showProducts();

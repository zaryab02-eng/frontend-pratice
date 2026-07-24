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

function findProduct(inputId) {
  const matchedId = products.find((product) => product.id === inputId);
  const { name, price, stock } = matchedId;
  if (!matchedId) {
    console.log("No product found");
  } else {
    console.log(name);
    console.log(`₹${price}`);
    console.log(`Stock:${stock}`);
  }
  return matchedId;
}

findProduct(1);

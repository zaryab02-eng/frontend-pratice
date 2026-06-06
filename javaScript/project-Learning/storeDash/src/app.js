const showAll = document.getElementById("showAll");
const inStock = document.getElementById("inStock");
const outStock = document.getElementById("outStock");
const input = document.getElementById("input");
const search = document.getElementById("search");
const display = document.getElementById("display");
const smryBtn = document.getElementById("summary");
const mstStckBtn = document.getElementById("mostStock");

const products = [
  { name: "Laptop", stock: 5 },
  { name: "Mouse", stock: 0 },
  { name: "Keyboard", stock: 3 },
  { name: "Monitor", stock: 0 },
  { name: "Phone", stock: 8 },
];

showAll.addEventListener("click", () => {
  display.textContent = "";
  products.forEach((product) => {
    const item = document.createElement("p");
    item.textContent = product.name;
    display.appendChild(item);
  });
});

inStock.addEventListener("click", () => {
  display.textContent = "";
  const stockItem = products.filter((product) => {
    return product.stock > 0;
  });
  stockItem.forEach((product) => {
    const item = document.createElement("p");
    item.textContent = `${product.name} - ${product.stock} left`;
    display.appendChild(item);
  });
});

outStock.addEventListener("click", () => {
  display.textContent = "";
  const outStockItems = products.filter((product) => {
    return product.stock === 0;
  });
  outStockItems.forEach((product) => {
    const item = document.createElement("p");
    item.textContent = `${product.name} - out of stock`;
    display.appendChild(item);
  });
});

smryBtn.addEventListener("click", () => {
  const totalProducts = products.length;
  const stockOn = products.filter((product) => {
    return product.stock > 0;
  });
  const stockOff = products.filter((product) => {
    return product.stock === 0;
  });

  display.textContent = "";
  const item = document.createElement("p");
  item.style.whiteSpace = "pre-line";
  item.textContent = `Total Products = ${totalProducts}\n In Stock = ${stockOn.length}\n Out of Stock = ${stockOff.length}`;
  display.appendChild(item);
});

let mostStock = products[0];

mstStckBtn.addEventListener("click", () => {
  display.textContent = "";
  for (const product of products) {
    if (product.stock > mostStock.stock) {
      mostStock = product;
    }
  }
  const item = document.createElement("p");
  item.textContent = `${mostStock.name} - Quantity ${mostStock.stock}`;
  display.appendChild(item);
});

search.addEventListener("click", () => {
  display.textContent = "";
  const inputItem = input.value.trim().toLowerCase();
  const matchedItem = products.find((product) => {
    return inputItem === product.name.toLowerCase();
  });
  display.textContent = matchedItem
    ? `${matchedItem.name} - ${matchedItem.stock} left`
    : ` item not found`;
});

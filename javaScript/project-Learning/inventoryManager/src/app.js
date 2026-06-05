const showAll = document.getElementById("showAll");
const inStock = document.getElementById("inStock");
const outStock = document.getElementById("outStock");
const input = document.getElementById("input");
const search = document.getElementById("search");
const display = document.getElementById("display");
const smryBtn = document.getElementById("summary");

const products = [
  { name: "Laptop", stock: 5 },
  { name: "Mouse", stock: 0 },
  { name: "Keyboard", stock: 3 },
  { name: "Monitor", stock: 0 },
];

showAll.addEventListener("click", () => {
  display.textContent = "";
  products.forEach((product) => {
    const item = document.createElement("p");
    item.textContent =
      product.stock > 0
        ? `${product.name} - ${product.stock} left`
        : `out of stock`;
    display.appendChild(item);
  });
});

inStock.addEventListener("click", () => {
  display.textContent = "";

  const stockCheck = products.filter((product) => {
    return product.stock > 0;
  });

  stockCheck.forEach((product) => {
    const item = document.createElement("p");
    item.textContent = `${product.name} - ${product.stock} left`;
    display.appendChild(item);
  });
});

outStock.addEventListener("click", () => {
  display.textContent = "";
  const stockCheck = products.filter((product) => {
    return product.stock === 0;
  });

  stockCheck.forEach((product) => {
    const item = document.createElement("p");
    item.textContent = `${product.name} - out of stock`;
    display.appendChild(item);
  });
});

search.addEventListener("click", () => {
  display.textContent = "";
  const inputValue = input.value.trim().toLowerCase();

  const matchFind = products.find((product) => {
    return inputValue === product.name.toLowerCase();
  });

  if (!matchFind) {
    display.textContent = "no result found";
    return;
  }

  const item = document.createElement("p");

  item.textContent =
    matchFind.stock === 0
      ? `${matchFind.name} - out of stock`
      : `${matchFind.name} - ${matchFind.stock} left`;
  display.appendChild(item);
});

smryBtn.addEventListener("click", () => {
  display.textContent = "";
  const totalItems = products.length;
  const inStock = products.filter((product) => {
    return product.stock > 0;
  });
  const outStock = products.filter((product) => {
    return product.stock === 0;
  });

  const item = document.createElement("p");
  item.style.whiteSpace = "pre-line";
  item.textContent = `Total Products: ${totalItems}\nIn Stock: ${inStock.length}\nOut of Stock: ${outStock.length}`;
  display.appendChild(item);
});

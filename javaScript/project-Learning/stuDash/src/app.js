const allBtn = document.getElementById("all");
const expensiveBtn = document.getElementById("exp");
const cheapBtn = document.getElementById("chp");
const costliestBtn = document.getElementById("cst");
const input = document.getElementById("input");
const searchBtn = document.getElementById("srh");
const display = document.getElementById("display");

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 },
  { name: "Monitor", price: 12000 },
];

allBtn.addEventListener("click", () => {
  const result = products.map((product) => {
    return product.name;
  });
  display.innerText = result;
});

expensiveBtn.addEventListener("click", () => {
  const result = products.filter((product) => {
    return product.price > 10000;
  });
  display.innerText = result.map((product) => product.name);
});

cheapBtn.addEventListener("click", () => {
  const result = products.filter((product) => {
    return product.price <= 10000;
  });
  display.innerText = result.map((product) => product.name);
});

costliestBtn.addEventListener("click", () => {
  let costliest = products[0];
  for (const product of products) {
    if (product.price > costliest.price) {
      costliest = product;
    }
  }
  display.innerText = `${costliest.name} - ₹${costliest.price}`;
});

searchBtn.addEventListener("click", () => {
  const inputItem = input.value.trim().toLowerCase();
  const matchedItem = products.find((product) => {
    return product.name.toLowerCase() === inputItem;
  });
  if (matchedItem) {
    display.innerText = `${matchedItem.name} - ₹${matchedItem.price}`;
  } else {
    display.innerText = `Not found`;
  }
});

const display = document.getElementById("display");
const input = document.getElementById("input");
const search = document.getElementById("srchBtn");

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 },
  { name: "Monitor", price: 12000 },
];

search.addEventListener("click", () => {
  const nameEntered = input.value.trim().toLowerCase();
  const matchedPart = products.find((product) => {
    return product.name.toLowerCase() === nameEntered;
  });
  if (matchedPart) {
    display.innerText = `${matchedPart.name} - ${matchedPart.price}`;
  } else {
    display.innerText = `No Product Found`;
  }
});

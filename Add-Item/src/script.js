const addButton = document.getElementById("addItemBtn");
const container = document.getElementById("itemContainer");

addButton.addEventListener("click", () => {
  const p = document.createElement("p");
  p.textContent = "New item added!";
  container.appendChild(p);
});

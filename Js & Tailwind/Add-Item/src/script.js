const addButton = document.getElementById("addBoxBtn");
const container = document.getElementById("boxContainer");

let boxCount = 0;

addButton.addEventListener("click", () => {
  boxCount++;

  const box = document.createElement("div");
  box.classList.add(
    "bg-gray-200",
    "p-4",
    "h-max",
    "w-[7rem]",
    "gap-2",
    "border-2",
    "border-black",
    "rounded",
    "shadow",
    "flex",
    "flex-col",
    "items-center",
    "justify-between"
  );
  container.appendChild(box);

  const p = document.createElement("p");
  p.textContent = `this is box ${boxCount}`;
  box.appendChild(p);

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add(
    "border-0",
    "rounded-[6px]",
    "p-2",
    "bg-red-300",
    "text-white"
  );
  box.appendChild(removeBtn);

  removeBtn.addEventListener("click", () => {
    container.removeChild(box);
  });
});

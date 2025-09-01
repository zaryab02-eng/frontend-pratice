const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const itemList = document.getElementById("itemList");

addBtn.addEventListener("click", () => {
  const item = itemInput.value.trim();
  if (!item) {
    return;
  }

  const li = document.createElement("li");
  li.classList.add(
    "flex",
    "justify-between",
    "items-center",
    "text-blue-500",
    "p-2",
    "border",
    "rounded",
    "mb-2"
  );

  const span = document.createElement("span");

  const dltBtn = document.createElement("button");
  dltBtn.textContent = "Delete!";
  dltBtn.classList.add(
    "text-red-500",
    "p-1",
    "border",
    "rounded",
    "bg-red-300",
    "border-black"
  );
  li.appendChild(span);
  span.textContent = item;
  li.appendChild(dltBtn);
  itemList.appendChild(li);

  itemInput.value = "";

  dltBtn.addEventListener("click", () => {
    li.remove();
  });
});

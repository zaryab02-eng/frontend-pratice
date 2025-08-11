const nameInput = document.getElementById("nameInput");
const addBtn = document.getElementById("addNameBtn");
const nameList = document.getElementById("nameList");
const state = document.getElementById("emptyState");
const totalCount = document.getElementById("totalCount");

let count = 0;

addBtn.addEventListener("click", () => {
  let name = nameInput.value.trim();

  if (!name) {
    state.textContent = "Please enter your name first!";
    return;
  }

  count++;
  state.innerText = `${count} Name added successfully`;

  let li = document.createElement("li");
  li.classList.add(
    "h-[3.125rem]",
    "w-[35.27rem]",
    "text-white",
    "text-[1rem]",
    "flex",
    "justify-between",
    "items-center",
    "p-2"
  );

  nameList.appendChild(li);

  let span = document.createElement("span");
  nameInput.value = "";

  span.textContent = name;
  span.classList.add("w-full");
  li.appendChild(span);

  totalCount.textContent = count;

  let removeBtn = document.createElement("button");
  removeBtn.textContent = "REMOVE";
  removeBtn.classList.add(
    "p-4",
    "bg-red-400",
    "text-white",
    "border-0",
    "rounded-[6px]"
  );
  li.appendChild(removeBtn);

  removeBtn.addEventListener("click", () => {
    li.remove();
    count--;
    totalCount.textContent = count;
    state.textContent = `${count} ${count === 1 ? "Name" : "Names"} remaining`;
  });
});

nameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addBtn.click();
  }
});

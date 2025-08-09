const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const remainCount = document.getElementById("remainingCount");
const taskStatus = document.getElementById("emptyState");

let count = 0;

addBtn.addEventListener("click", () => {
  count++;
  let task = input.value;
  let list = document.createElement("li");
  list.classList.add(
    "flex",
    "items-center",
    "justify-between",
    "pr-2",
    "pl-2",
    "h-[3rem]",
    "w-[18rem]",
    "font-semibold",
    "text-red-500",
    "sm:w-[20.415rem]",
    "md:w-[29.415rem]",
    "lg:w-[29.415rem]",
    "xl:w-[29.415rem]",
    "border-2",
    "border-black"
  );
  list.textContent = task;
  taskList.appendChild(list);

  let completeBtn = document.createElement("button");
  completeBtn.classList.add(
    "border-0",
    "rounded-[6px]",
    "p-1",
    "flex",
    "justify-center",
    "relative",
    "sm:left-[40%]",
    "md:left-[28%]",
    "items-center",
    "text-white",
    "bg-blue-400"
  );
  completeBtn.textContent = "Complete";
  list.appendChild(completeBtn);

  completeBtn.addEventListener("click", () => {
    list.classList.toggle("custom-strike");
  });

  taskStatus.innerText = `${count} Task Added`;
});

const { createElement } = require("react");

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const remainCount = document.getElementById("remainingCount");
const taskStatus = document.getElementById("emptyState");

addBtn.addEventListener("click", () => {
  let task = taskList.input;
  if (!task) = return;
  let div = document.createElement("div");
});

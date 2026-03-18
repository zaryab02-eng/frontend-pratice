function sayHi() {
  console.log("Hi");
}

function runTask(task) {
  task();
}

runTask(sayHi);

function sayHello(name) {
  console.log("Hello " + name);
}

function greetUser(callback) {
  callback("Zaryab");
}

greetUser(sayHello);
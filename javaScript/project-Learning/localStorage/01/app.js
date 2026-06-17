// localStorage.setItem("userName", "Zaryab");
// const newName = localStorage.getItem("userName");
// console.log(newName);

// const product = {
//   name: "Laptop",
//   price: 65000,
// };

// localStorage.setItem("product", JSON.stringify(product));
// const data = localStorage.getItem("product");
// console.log(data);
// const productObj = JSON.parse(data);
// console.log(productObj.name);

// const user = {
//   name: "Zaryab",
//   city: "Ghaziabad",
//   age: 22,
// };

// localStorage.setItem("user", JSON.stringify(user));
// const userData = localStorage.getItem("user");
// const objData = JSON.parse(userData);
// console.log(`${objData.name} from ${objData.city}`);

// const cart = [
//   { name: "Laptop", price: 65000 },
//   { name: "Mouse", price: 500 },
//   { name: "Keyboard", price: 1500 },
// ];

// localStorage.setItem("cart", JSON.stringify(cart));
// const data = localStorage.getItem("cart");
// const objData = JSON.parse(data);
// const totalPrice = objData.reduce((current, { price }) => current + price, 0);
// console.log(totalPrice);

// const movies = [
//   { title: "Inception", rating: 8.8 },
//   { title: "Interstellar", rating: 8.6 },
//   { title: "Batman Begins", rating: 8.2 },
// ];

// localStorage.setItem("movies", JSON.stringify(movies));
// const data = localStorage.getItem("movies");
// const objData = JSON.parse(data);
// const newArr = objData.map(({ title }) => title);
// console.log(newArr);

const todos = [
  { text: "Learn JS", completed: true },
  { text: "Build Project", completed: false },
  { text: "Learn React", completed: false },
];

localStorage.setItem("todos", JSON.stringify(todos));
const data = localStorage.getItem("todos");
const objData = JSON.parse(data);
const incompleteTodos = objData
  .filter(({ completed }) => completed === false)
  .map(({ text }) => text);
console.log(incompleteTodos);

// const fruits = ["Apple", "Mango", "Banana"];

// const [firstFruit, secondFruit, thirdFruit] = fruits;

// console.log(firstFruit);
// console.log(secondFruit);
// console.log(thirdFruit);

// const cities = ["Delhi", "Mumbai", "Lucknow", "Pune"];

// const [firstCity, , , fourthCity] = cities;
// console.log(firstCity, fourthCity);

// const user = {
//   name: "Zaryab",
//   age: 22,
//   city: "Prayagraj",
// };

// function showUsers({ name: userName, age: userAge, city: userCity } = user) {
//   return `${userName} from ${userCity}`;
// }

// console.log(showUsers());

// const greet = (name) => {
//   return `Hello ${name}`;
// };

// const add = (a, b) => {
//   return a + b;
// };

// console.log(add(2, 2));

// function getName(user) {
//   return user.name;
// }

// const greet = (user) => `Hello ${user}`;
// console.log(greet(zaryab));

// function getPrice(product) {
//   return product.price;
// }

// const getPrice = (product) => product.price;

// const getProdcuctName = ({ product }) => product;

// const getStudentMarks = ({ marks }) => marks;

// const users = [
//   { name: "Zaryab", age: 22 },
//   { name: "Areeba", age: 20 },
//   { name: "Nazia", age: 21 },
// ];

// const newArr = users.map(({ name }) => name);
// console.log(newArr);

// const products = [
//   { name: "Laptop", price: 65000 },
//   { name: "Phone", price: 30000 },
//   { name: "Tablet", price: 20000 },
// ];

// // const newArr = products.map(({ price }) => price);
// // console.log(newArr);

// const matchedItem = products
//   .filter((product) => product.price >= 30000)
//   .map(({ name }) => name);

// console.log(matchedItem);

const products = [
  { name: "Laptop", price: 65000, stock: 5 },
  { name: "Phone", price: 30000, stock: 0 },
  { name: "Tablet", price: 20000, stock: 10 },
  { name: "Monitor", price: 15000, stock: 0 },
];

const inStockItems = products
  .filter((product) => product.stock > 0)
  .map(({ name }) => name);

console.log(inStockItems);

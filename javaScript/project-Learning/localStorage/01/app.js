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

const cart = [
  { name: "Laptop", price: 65000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 },
];

localStorage.setItem("cart", JSON.stringify(cart));
const data = localStorage.getItem("cart");
const objData = JSON.parse(data);
const totalPrice = objData.reduce((current, { price }) => current + price, 0);
console.log(totalPrice);

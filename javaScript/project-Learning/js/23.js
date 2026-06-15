const product = {
  name: "iPhone 15",
  price: 79999,
  stock: 12,
  rating: 4.8,
};

const {
  name: productName,
  price: productPrice,
  stock: productStock,
  rating: productRating,
} = product;

const student = {
  name: "Areeba",
  marks: 89,
  city: "Delhi",
};

const { name: studentName, marks: studentMarks } = student;

const movie = {
  title: "Inception",
  rating: 8.8,
  year: 2010,
  director: "Christopher Nolan",
};

const {
  title: mmovieTitle,
  rating: movieRating,
  director: movieDirector,
} = movie;

const user = {
  name: "Zaryab",
  age: 22,
};

const { name: userName, age: userAge } = user;
console.log(`${userName} is ${userAge} year old`);

const admin = {
  name: "Zaryab",
  email: "zaryab@gmail.com",
  role: "Admin",
};

const { name: adminName, email: adminMail, role: roleAdmin } = admin;
console.log(`${roleAdmin}: ${adminName} | ${adminMail} | ${roleAdmin}`);

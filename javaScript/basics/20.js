let str = "javascript is awesome";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === "a") {
    count++;
  } else if (str[i] === "e") {
    count++;
  } else if (str[i] === "i") {
    count++;
  } else if (str[i] === "o") {
    count++;
  }
}

console.log(count);

function double(num) {
  return num * 2;
}

console.log(double(5));
console.log(double(10));
console.log(double(20));

function stockStatus(stock) {
  if (stock > 0) {
    return `${stock} left`;
  } else if (stock === 0) {
    return `out of stock`;
  }
}

const result = stockStatus(8);
console.log(result);

function isAdult(age) {
  if (age >= 18) {
    return `Adult`;
  } else {
    return `Minor`;
  }
}

console.log(isAdult(18));
console.log(isAdult(15));

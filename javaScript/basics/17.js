for (let num = 1; num <= 20; num++) {
  if (num % 2 === 0 && num % 3 === 0) {
    console.log("EvenThree");
  } else if (num % 3 === 0) {
    console.log("Three");
  } else if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log(num);
  }
}

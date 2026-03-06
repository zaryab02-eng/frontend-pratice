let count = 0;

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log("Even");
    count = count + 1;
  } else {
    console.log(i);
  }
}

console.log(`Total Even Numbers:${count}`);

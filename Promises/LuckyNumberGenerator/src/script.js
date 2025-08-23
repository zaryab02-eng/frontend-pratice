const button = document.getElementById("luckyBtn");
const display = document.getElementById("luckyDisplay");

button.addEventListener("click", () => {
  display.innerText = "Loading...";

  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      const luckyNumber = Math.floor(Math.random() * 100) + 1;

      resolve(`Your Lucky Number is: ${luckyNumber}`);
    }, 2000);
  });
  myPromise.then((result) => {
    display.innerText = result;
  });
});

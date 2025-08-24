const display = document.getElementById("wisdomDisplay");
const button = document.getElementById("wisdomBtn");

const quotes = [
  "The only way to do great work is to love what you do.",
  "Life is what happens when you're busy making other plans.",
  "The future belongs to those who believe in their dreams.",
  "Success is not final, failure is not fatal.",
  "Be yourself; everyone else is already taken.",
];

button.addEventListener("click", () => {
  display.innerText = "Finding wisdom...";
  button.disabled = true;

  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      const wisdom = quotes[Math.floor(Math.random() * quotes.length)];

      resolve(wisdom);
    }, 3000);
  });
  myPromise.then((result) => {
    display.innerText = result;
    button.disabled = false;
  });
});

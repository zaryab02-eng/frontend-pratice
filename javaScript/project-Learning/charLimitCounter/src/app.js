const textArea = document.getElementById("textArea");
const limitCounter = document.getElementById("limitCounter");

textArea.addEventListener("input", () => {
  let count = textArea.value.length;
  limitCounter.innerText = `${count}/50`;
});

const textArea = document.getElementById("char");
const display = document.getElementById("display");

textArea.addEventListener("input", () => {
  let count = textArea.value.length;
  display.innerText = `${count} characters`;
});

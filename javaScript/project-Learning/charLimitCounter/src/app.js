const textArea = document.getElementById("textArea");
const limitCounter = document.getElementById("limitCounter");

textArea.addEventListener("input", () => {
  let count = textArea.value.length;
  limitCounter.innerText = `${count}/50`;

  if (count === 0) {
    limitCounter.className = "text-black";
  } else if (count > 0 && count <= 50) {
    // Changed >= to >
    limitCounter.className = "text-green-500";
  } else {
    limitCounter.className = "text-red-500";
  }
});

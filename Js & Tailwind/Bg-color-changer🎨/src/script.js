const page = document.getElementById("page");

const allBg = [
    "bg-black",
    "bg-white",
    "bg-red-600",
    "bg-yellow-400",
    "bg-green-500",
    "bg-blue-500",
];

const allborder = [
    "border-white",
    "border-black"
];

function bgChanger (addBg) {
    page.classList.remove(...allBg);
    page.classList.add(addBg);
}

document.getElementById("white").onclick = () => bgChanger("bg-white");
document.getElementById("red").onclick = () => bgChanger("bg-red-600");
document.getElementById("yellow").onclick = () => bgChanger("bg-yellow-400");
document.getElementById("green").onclick = () => bgChanger("bg-green-500");
document.getElementById("blue").onclick = () => bgChanger("bg-blue-500");

const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", () => {
    resetButton.classList.add("active-red");
    bgChanger("bg-black");

    setTimeout(() => {
        resetButton.classList.remove("active-red");
    },500);
});
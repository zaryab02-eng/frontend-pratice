const display = document.getElementById("nameDisplay");
const button = document.getElementById("showNameBtn");

let people = [
  { realName: "Alice", gender: "female" },
  { realName: "Bob", gender: "male" },
  { realName: "Charlie", gender: "male" },
];

button.addEventListener("click", () => {
  const greetings = people.map((greet) => {
    if (greet.gender === "female") {
      return `Ms ${greet.realName}`;
    } else {
      return `Mr ${greet.realName}`;
    }
  });

  display.innerHTML = greetings.join("<br>");
});

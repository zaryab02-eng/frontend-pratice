const button = document.getElementById("jokeBtn");
const display = document.getElementById("jokeDisplay");

button.addEventListener("click", async () => {
  try {
    display.innerText = "Joke Loading...";
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });
    const data = await response.json();
    display.innerText = data.joke;
  } catch (error) {
    display.innerText = "Failed to find a joke";
  }
});

const movieInput = document.getElementById("inputHere");
const search = document.getElementById("searchBtn");
const result = document.getElementById("resultBox");

search.addEventListener("click", () => {
  let movieEntered = movieInput.value.trim();
  const movies = ["Dhoom", "Don", "Spiderman", "Dracula", "kick"];

  if (movieEntered === "") {
    result.innerText = "Please enter a movie name first";
    return;
  }

  let count = 0;

  movies.forEach((movie) => {
    if (movie.toLowerCase().includes(movieEntered.toLowerCase())) {
      count++;
    }
  });

  if (count > 0) {
    const word = count === 1 ? "match" : "matches";
    result.innerText = `Found ${count} ${word}`;
  } else {
    result.innerText = "No movie found!";
  }
});

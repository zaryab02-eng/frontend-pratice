const inputMovie = document.getElementById("searchInput");
const display = document.getElementById("movieDisplay");

let movies = [
  "Dangal",
  "Bahubali",
  "RRR",
  "Sholay",
  "Lagaan",
  "Zindagi Na Milegi Dobara",
  "Inception",
  "Avengers",
  "Kantara",
];

inputMovie.addEventListener("input", () => {
  const movieEntered = inputMovie.value.toLowerCase();

  if (movieEntered === "" || movieEntered.trim() === "") {
    display.innerHTML = "";
    return;
  }

  const filteredMovie = movies.filter((movie) => {
    return movie.toLowerCase().includes(movieEntered);
  });

  if (filteredMovie.length === 0) {
    display.innerText = "No movie found";
  } else {
    display.innerHTML = filteredMovie.join("<br>");
  }
});

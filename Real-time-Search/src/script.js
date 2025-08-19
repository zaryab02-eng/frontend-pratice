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

  const filteredMovie = movies.filter((movie) => {
    return movie.toLowerCase().includes(movieEntered);
  });

  display.innerHTML = filteredMovie.join("<br>");
});

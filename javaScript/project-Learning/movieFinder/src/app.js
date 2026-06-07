const showAllBtn = document.getElementById("showAll");
const topRatedBtn = document.getElementById("topRated");
const highRatedBtn = document.getElementById("highRated");
const avgRatingBtn = document.getElementById("avgRating");
const input = document.getElementById("input");
const searchaBtn = document.getElementById("search");
const display = document.getElementById("display");
const highRatingFirstBtn = document.getElementById("highRatingFirst");
const lowestRatingFirst = document.getElementById("lowestRatingFirst");

const movies = [
  { name: "Inception", rating: 9 },
  { name: "Avatar", rating: 7 },
  { name: "Joker", rating: 8 },
  { name: "Titanic", rating: 6 },
  { name: "Interstellar", rating: 10 },
];

function renderMovies(movieArray) {
  const item = document.createElement("p");
  item.textContent = `${movieArray.name} - ${movieArray.rating}⭐`;
  return display.appendChild(item);
}

highRatingFirstBtn.addEventListener("click", () => {
  display.textContent = "";
  const highestRated = [...movies].sort((a, b) => {
    return b.rating - a.rating;
  });
  highestRated.forEach((movie) => {
    renderMovies(movie);
  });
});

lowestRatingFirst.addEventListener("click", () => {
  display.textContent = "";
  const lowestRated = [...movies].sort((a, b) => {
    return a.rating - b.rating;
  });
  lowestRated.forEach((movie) => {
    renderMovies(movie);
  });
});

showAllBtn.addEventListener("click", () => {
  display.textContent = "";
  movies.forEach((movie) => {
    renderMovies(movie);
  });
});

topRatedBtn.addEventListener("click", () => {
  display.textContent = "";
  let topRated = movies[0];
  for (const movie of movies) {
    if (movie.rating > topRated.rating) {
      topRated = movie;
    }
  }
  renderMovies(topRated);
});

highRatedBtn.addEventListener("click", () => {
  display.textContent = "";
  const result = movies.filter((movie) => movie.rating >= 8);
  result.forEach((movie) => renderMovies(movie));
});

avgRatingBtn.addEventListener("click", () => {
  display.textContent = "";
  let total = 0;
  for (const movie of movies) {
    total += movie.rating;
  }
  let avg = total / movies.length;
  const item = document.createElement("p");
  item.textContent = `Average rating - ${avg.toFixed(1)}⭐`;
  display.appendChild(item);
});

searchaBtn.addEventListener("click", () => {
  display.textContent = "";
  const inputValue = input.value.trim().toLowerCase();
  let matchedMovie = movies.find((movie) => {
    return inputValue === movie.name.toLowerCase();
  });
  if (!matchedMovie) {
    display.textContent = "Movie not found";
  } else {
    renderMovies(matchedMovie);
  }
});

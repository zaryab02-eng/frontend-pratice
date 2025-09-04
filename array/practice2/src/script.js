const movieInput = document.getElementById("movieInput");
const addMovieBtn = document.getElementById("addMovieBtn");
const latestMovie = document.getElementById("latestMovie");
const movieCount = document.getElementById("movieCount");
const showAllBtn = document.getElementById("showAllBtn");
const movieSection = document.getElementById("movieSection");
const movieList = document.getElementById("movieList");

const myMovies = [];

// Add movie
addMovieBtn.addEventListener("click", () => {
  const movie = movieInput.value.trim();
  if (movie === "") return; // stop empty entries

  myMovies.push(movie);
  movieCount.textContent = myMovies.length;
  latestMovie.textContent = movie;
  movieInput.value = ""; // clear input
});

// Show all movies
showAllBtn.addEventListener("click", () => {
  movieSection.classList.remove("hidden");
  movieList.innerHTML = ""; // clear old list

  myMovies.forEach((movie, index) => {
    const li = document.createElement("li");
    li.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "bg-gray-100",
      "px-3",
      "py-2",
      "rounded-lg"
    );

    const span = document.createElement("span");
    span.textContent = movie;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "DELETE";
    removeBtn.classList.add(
      "bg-red-500",
      "text-white",
      "px-3",
      "py-1",
      "rounded",
      "hover:bg-red-600"
    );

    // delete movie
    removeBtn.addEventListener("click", () => {
      myMovies.splice(index, 1);
      movieCount.textContent = myMovies.length;
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(removeBtn);
    movieList.appendChild(li);
  });
});

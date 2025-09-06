const books = [
  { title: "JavaScript Guide", pages: 300, available: true, genre: "tech" },
  { title: "Mystery Novel", pages: 250, available: false, genre: "fiction" },
  { title: "Python Basics", pages: 180, available: true, genre: "tech" },
  { title: "Romance Story", pages: 320, available: true, genre: "fiction" },
  { title: "Web Design", pages: 150, available: false, genre: "tech" },
];

// Rules:
// 1. Available + Tech + 200+ pages = "Premium Tech: TITLE"
// 2. Available + Tech + Under 200 pages = "Basic Tech: TITLE"
// 3. Available + Fiction = "Available Fiction: TITLE"
// 4. Not Available = "Currently Unavailable: TITLE"

// Expected Output:
// ["Premium Tech: JAVASCRIPT GUIDE", "Currently Unavailable: MYSTERY NOVEL",
//  "Basic Tech: PYTHON BASICS", "Available Fiction: ROMANCE STORY",
//  "Currently Unavailable: WEB DESIGN"]

const result = books.map((book) => {
  if (book.available === true && book.genre == "tech" && book.pages > 200) {
    return `Premium Tech: ${book.title.toUpperCase()}`;
  } else if (
    book.available === true &&
    book.genre == "tech" &&
    book.pages < 200
  ) {
    return `Basic Tech: ${book.title.toUpperCase()}`;
  } else if (book.available === true && book.genre == "fiction") {
    return `Available Fiction: ${book.title.toUpperCase()}`;
  } else {
    return `Currently Unavailable: ${book.title.toUpperCase()}`;
  }
});

console.log(result);

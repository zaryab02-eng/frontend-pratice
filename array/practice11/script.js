const books = [
  { id: 1, title: "JavaScript Guide", genre: "tech", publishYear: 2020 },
  { id: 2, title: "Mystery Novel", genre: "fiction", publishYear: 2018 },
  { id: 3, title: "Python Basics", genre: "tech", publishYear: 2021 },
  { id: 4, title: "Romance Story", genre: "romance", publishYear: 2019 },
];

const borrowings = [
  {
    bookId: 1,
    borrowerName: "Alice",
    borrowDate: "2024-01-15",
    returnDate: "2024-01-30",
    status: "returned",
  },
  {
    bookId: 1,
    borrowerName: "Bob",
    borrowDate: "2024-02-01",
    returnDate: null,
    status: "borrowed",
  },
  {
    bookId: 2,
    borrowerName: "Carol",
    borrowDate: "2024-01-10",
    returnDate: "2024-01-25",
    status: "returned",
  },
  {
    bookId: 3,
    borrowerName: "Dave",
    borrowDate: "2024-02-05",
    returnDate: null,
    status: "overdue",
  },
  {
    bookId: 4,
    borrowerName: "Emma",
    borrowDate: "2024-01-20",
    returnDate: "2024-02-05",
    status: "returned",
  },
];

// Goal: Show each book's current status and total times borrowed
// Rules:
// - If any borrowing is "borrowed" or "overdue" → book is "Currently Unavailable"
// - Otherwise → "Available"
// - Count ALL borrowings (regardless of status)

// Expected:
// ["JavaScript Guide: Currently Unavailable (2 times borrowed)",
//  "Mystery Novel: Available (1 times borrowed)",
//  "Python Basics: Currently Unavailable (1 times borrowed)",
//  "Romance Story: Available (1 times borrowed)"]

const result = books.map((book) => {
  const bookBorrowing = borrowings.filter(
    (borrow) => book.id === borrow.bookId
  );
  const totalBorrowings = bookBorrowing.length;
  const activeBorrowings = bookBorrowing.filter(
    (availabe) =>
      availabe.status === "overdue" || availabe.status === "borrowed"
  );
  const isUnavailable = activeBorrowings.length > 0;
  const availability = isUnavailable ? "Currently Unavailable" : "Available";
  return `${book.title}: ${availability} (${totalBorrowings} times borrowed)`;
});

console.log(result);

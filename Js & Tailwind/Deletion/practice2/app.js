const expenses = [
  { id: 1, item: "Coffee", amount: 5 },
  { id: 2, item: "Lunch", amount: 12 },
  { id: 3, item: "Gas", amount: 30 },
];

function showExpenses() {
  const list = document.getElementById("expense-list");
  list.innerHTML = "";

  expenses.forEach((expense) => {
    const li = document.createElement("li");
    li.dataset.id = expense.id; // Added: data-id for tracking
    li.innerHTML = `${expense.item} - $${expense.amount} <button onclick="deleteExpense(${expense.id})">❌</button>`;
    list.appendChild(li);
  });
}

// New function to delete expenses
function deleteExpense(id) {
  const index = expenses.findIndex(expense => expense.id === id); // Find position in array
  if (index > -1) {
    expenses.splice(index, 1); // Remove from array
    showExpenses(); // Update display
  }
}

showExpenses();
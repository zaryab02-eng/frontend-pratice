const expenses = [
  { id: 1, item: "Coffee", amount: 5 },
  { id: 2, item: "Lunch", amount: 12 },
  { id: 3, item: "Gas", amount: 30 },
];

function showExpense() {
  const list = document.getElementById("expense-list");
  list.innerHTML = "";

  expenses.forEach((expense) => {
    const li = document.createElement("li");
    li.innerHTML = `${expense.item}-$${expense.amount} <button>❌</button>`;
    list.appendChild(li);
  });
}

showExpense();

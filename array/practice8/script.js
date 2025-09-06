const salesPeople = [
  { name: "Alice", sales: [1200, 800, 950], region: "north", experience: 3 },
  { name: "Bob", sales: [600, 400, 700], region: "south", experience: 1 },
  { name: "Carol", sales: [1500, 1200, 1800], region: "north", experience: 5 },
  { name: "Dave", sales: [300, 200, 450], region: "west", experience: 2 },
];

// Calculate total sales per person, then categorize:
// 3000+ = "Top Performer: NAME (Total: $X)"
// 1500-2999 = "Good Performer: NAME (Total: $X)"
// Under 1500 = "Needs Improvement: NAME (Total: $X)"
const result = salesPeople.map((people) => {
  const totalSales = people.sales.reduce((sum, sale) => sum + sale, 0);

  if (totalSales > 3000) {
    return `Top Performer: ${people.name.toUpperCase()} (${totalSales})`;
  } else if (totalSales >= 1500 && totalSales <= 2999) {
    return `Good Performer: ${people.name.toUpperCase()} (${totalSales})`;
  } else if (totalSales < 1500) {
    return `Need Improvement: ${people.name.toUpperCase()} (${totalSales})`;
  }
});

console.log(result);

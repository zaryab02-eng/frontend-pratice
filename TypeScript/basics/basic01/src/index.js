"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orders = [
    { id: 1, customer: "Ali", amount: 2500, status: "paid" },
    { id: 2, customer: "Sara", amount: 4000, status: "pending" },
    { id: 3, customer: "John", amount: 6500, status: "paid" },
    { id: 4, customer: "Ayan", amount: 3000, status: "cancelled" },
];
function getTotalPaidAmount() {
    return orders.reduce((sum, { status, amount }) => (status === "paid" ? sum + amount : sum), 0);
}
console.log(getTotalPaidAmount());
//# sourceMappingURL=index.js.map
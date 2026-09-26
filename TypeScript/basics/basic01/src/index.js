"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orders = [
    { id: 1, customer: "Ali", amount: 2500, status: "paid" },
    { id: 2, customer: "Sara", amount: 4000, status: "pending" },
    { id: 3, customer: "John", amount: 6500, status: "paid" },
    { id: 4, customer: "Ayan", amount: 3000, status: "cancelled" },
];
// function getTotalPaidAmount(): number {
//   return orders.reduce(
//     (sum, { status, amount }) => (status === "paid" ? sum + amount : sum),
//     0,
//   );
// }
// console.log(getTotalPaidAmount());
// function getAveragePaidAmount(): number {
//   const paidCount = orders.reduce(
//     (sum, { status }) => (status === "paid" ? sum + 1 : sum),
//     0,
//   );
//   return orders.reduce(
//     (sum, { status, amount }) =>
//       status === "paid" ? sum + amount / paidCount : sum,
//     0,
//   );
// }
// console.log(getAveragePaidAmount());
function getOrderStatusCount() {
    return orders.reduce((sum, { status }) => {
        return {
            paid: status === "paid" ? sum.paid + 1 : sum.paid,
            pending: status === "pending" ? sum.pending + 1 : sum.pending,
            cancelled: status === "cancelled" ? sum.cancelled + 1 : sum.cancelled,
        };
    }, {
        paid: 0,
        pending: 0,
        cancelled: 0,
    });
}
console.log(getOrderStatusCount());
//# sourceMappingURL=index.js.map
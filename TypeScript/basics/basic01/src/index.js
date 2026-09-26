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
    return orders.reduce((sum, { status, amount }) => {
        return {
            paid: status === "paid"
                ? {
                    count: sum.paid.count + 1,
                    amount: sum.paid.amount + amount,
                }
                : {
                    count: sum.paid.count,
                    amount: sum.paid.amount,
                },
            pending: status === "pending"
                ? {
                    count: sum.pending.count + 1,
                    amount: sum.pending.amount + amount,
                }
                : {
                    count: sum.pending.count,
                    amount: sum.pending.amount,
                },
            cancelled: status === "cancelled"
                ? {
                    count: sum.cancelled.count + 1,
                    amount: sum.cancelled.amount + amount,
                }
                : {
                    count: sum.cancelled.count,
                    amount: sum.cancelled.amount,
                },
        };
    }, {
        paid: { count: 0, amount: 0 },
        pending: { count: 0, amount: 0 },
        cancelled: { count: 0, amount: 0 },
    });
}
console.log(getOrderStatusCount());
//# sourceMappingURL=index.js.map
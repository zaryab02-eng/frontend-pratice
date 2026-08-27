"use strict";
// type Payment =
//   | { status: "success"; amount: number }
//   | { status: "failed"; reason: string };
Object.defineProperty(exports, "__esModule", { value: true });
// function getPaymentMessage(payment: Payment): string {
//   if (payment.status === "success") {
//     return `Payment successful: ₹${payment.amount}`;
//   } else {
//     return `Payment failed: ${payment.reason}`;
//   }
// }
// console.log(getPaymentMessage({ status: "success", amount: 500 }));
// console.log(
//   getPaymentMessage({ status: "failed", reason: "Insufficient balance" }),
// );
// interface Admin {
//   name: string;
//   permissions: string[];
// }
// interface Customer {
//   name: string;
//   order: number;
// }
// function isAdmin(user: Admin | Customer): boolean {
//   if ("permissions" in user) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isAdmin({ name: "zaryab", order: 2 }));
// const productInfo: [string, number, boolean] = ["keyboard", 2500, true];
// console.log(productInfo);
function getProduct() {
    return ["mouse", 200, true];
}
console.log(getProduct());
//# sourceMappingURL=index.js.map
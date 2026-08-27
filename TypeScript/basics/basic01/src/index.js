"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getPaymentMessage(payment) {
    if (payment.status === "success") {
        return `Payment successful: ₹${payment.amount}`;
    }
    else {
        return `Payment failed: ${payment.reason}`;
    }
}
console.log(getPaymentMessage({ status: "success", amount: 500 }));
console.log(getPaymentMessage({ status: "failed", reason: "Insufficient balance" }));
//# sourceMappingURL=index.js.map
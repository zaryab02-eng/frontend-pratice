type Payment =
  | { status: "success"; amount: number }
  | { status: "failed"; reason: string };

function getPaymentMessage(payment: Payment): string {
  if (payment.status === "success") {
    return `Payment successful: ₹${payment.amount}`;
  } else {
    return `Payment failed: ${payment.reason}`;
  }
}

console.log(getPaymentMessage({ status: "success", amount: 500 }));
console.log(
  getPaymentMessage({ status: "failed", reason: "Insufficient balance" }),
);

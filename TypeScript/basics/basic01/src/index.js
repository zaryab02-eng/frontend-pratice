"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getOrderInfo(order) {
    if (order.status === "delivered") {
        return `Delivered on ${order.deliveryDate}`;
    }
    else {
        return `Cancelled ${order.reason}`;
    }
}
console.log(getOrderInfo({ status: "delivered", deliveryDate: "21 August" }));
console.log(getOrderInfo({
    status: "cancelled",
    reason: "duniya khatam ho gyi aadhe raaste me",
}));
//# sourceMappingURL=index.js.map
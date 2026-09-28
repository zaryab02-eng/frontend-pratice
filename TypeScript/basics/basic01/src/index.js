"use strict";
// interface User {
//   name: string;
//   email: string;
// }
Object.defineProperty(exports, "__esModule", { value: true });
function getUserInfo(user) {
    if (user.role === "admin") {
        return `${user.role} has ${user.permissions.length} permissions`;
    }
    else {
        return `${user.role} has ${user.orders} orders`;
    }
}
console.log(getUserInfo({
    role: "admin",
    permissions: ["delete", "edit"],
}));
// "Admin has 2 permissions"
console.log(getUserInfo({
    role: "customer",
    orders: 5,
}));
// "Customer has 5 orders"
//# sourceMappingURL=index.js.map
// interface User {
//   name: string;
//   email: string;
// }

// function formatUser(user: User | string): string {
//   if (typeof user === "string") {
//     return user;
//   } else {
//     return `${user.name} - ${user.email}`;
//   }
// }

// console.log(formatUser("zryab"));

interface Admin {
  role: "admin";
  permissions: string[];
}

interface Customer {
  role: "customer";
  orders: number;
}

function getUserInfo(user: Admin | Customer): string {
  if (user.role === "admin") {
    return `${user.role} has ${user.permissions.length} permissions`;
  } else {
    return `${user.role} has ${user.orders} orders`;
  }
}

console.log(
  getUserInfo({
    role: "admin",
    permissions: ["delete", "edit"],
  }),
);

// "Admin has 2 permissions"

console.log(
  getUserInfo({
    role: "customer",
    orders: 5,
  }),
);

// "Customer has 5 orders"

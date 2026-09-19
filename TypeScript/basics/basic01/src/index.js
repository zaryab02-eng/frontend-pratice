"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products = [
    { id: 1, name: "Keyboard", price: 2500, inStock: true },
    { id: 2, name: "Mouse", price: 1200, inStock: false },
    { id: 3, name: "Monitor", price: 15000, inStock: true },
];
function getTotalPrice() {
    return products.reduce((sum, product) => {
        return sum + product.price;
    }, 0);
}
console.log(getTotalPrice());
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products = [
    { id: 1, name: "Keyboard", price: 2500, inStock: true },
    { id: 2, name: "Mouse", price: 1200, inStock: false },
    { id: 3, name: "Monitor", price: 15000, inStock: true },
];
function getExpensiveInStockCount() {
    return products.reduce((sum, { price, inStock }) => (inStock && 5000 <= price ? sum + 1 : sum), 0);
}
console.log(getExpensiveInStockCount());
//# sourceMappingURL=index.js.map
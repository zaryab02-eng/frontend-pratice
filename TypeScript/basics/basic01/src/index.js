"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products = [
    { id: 1, name: "Keyboard", price: 2500, inStock: true },
    { id: 2, name: "Mouse", price: 1200, inStock: false },
    { id: 3, name: "Monitor", price: 15000, inStock: true },
];
function getAffordableProducts(maxPrice) {
    return products.filter(({ price }) => price <= maxPrice);
}
console.log(getAffordableProducts(1000));
//# sourceMappingURL=index.js.map
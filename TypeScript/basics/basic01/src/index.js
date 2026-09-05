"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products = [
    { id: 1, name: "Keyboard", price: 2500, inStock: true },
    { id: 2, name: "Mouse", price: 1200, inStock: false },
    { id: 3, name: "Monitor", price: 15000, inStock: true },
];
function updateStock(id, status) {
    return products.map((product) => {
        if (product.id === id) {
            return {
                ...product,
                inStock: status,
            };
        }
        return product;
    });
}
console.log(updateStock(2, true));
//# sourceMappingURL=index.js.map
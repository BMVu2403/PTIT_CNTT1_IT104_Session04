"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateOrderTotal(order) {
    return order.items.reduce((sum, item) => {
        return sum + item.product.price * item.quantity;
    }, 0);
}
function printOrder(order) {
    console.log(`Đơn hàng: #${order.orderId}`);
    console.log(`Khách hàng: ${order.customerName}`);
    console.log(`Sản phẩm:`);
    order.items.forEach((item) => {
        const lineTotal = item.product.price * item.quantity;
        console.log(`- ${item.product.name} × ${item.quantity} → ${lineTotal.toLocaleString()} VND`);
    });
    const grandTotal = calculateOrderTotal(order);
    console.log(`Tổng cộng: ${grandTotal.toLocaleString()} VND`);
    if (order.note) {
        console.log(`Ghi chú: ${order.note}`);
    }
}
// Ví dụ dữ liệu
const product1 = { id: "P001", name: "Áo sơ mi", price: 250000 };
const product2 = { id: "P002", name: "Quần tây", price: 400000 };
const order = {
    orderId: "ORD001",
    customerName: "Nguyễn Văn A",
    items: [
        { product: product1, quantity: 2 },
        { product: product2, quantity: 1 },
    ],
    note: "Giao sau 18h",
};
printOrder(order);

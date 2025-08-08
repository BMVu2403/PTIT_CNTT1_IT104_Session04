"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Dữ liệu mẫu
const invoice = {
    invoice: "HD101#",
    createAt: new Date(),
    orders: [
        {
            orderId: "ORD001#",
            customerName: "Nguyen Van A",
            items: [
                {
                    product: { id: "SP001#", name: "Ao polo", price: 200 },
                    quantity: 3,
                    note: "size M x1, size L x2",
                },
                {
                    product: { id: "SP002#", name: "Ao So Mi", price: 150 },
                    quantity: 2,
                    note: "size M x1, size L x1",
                },
            ],
            deliveryAddress: "Ha Noi",
            isPaid: false,
        },
        {
            orderId: "ORD022#",
            customerName: "Nguyen Thi B",
            items: [
                {
                    product: { id: "SP0123#", name: "Hoa ..", price: 40 },
                    quantity: 5,
                    note: "Hoa Hong x1, Hoa.. x2",
                },
                {
                    product: { id: "SP0124#", name: "Chau Cay", price: 100 },
                    quantity: 5,
                    note: ".",
                },
            ],
            deliveryAddress: "HCM",
            isPaid: true,
        },
    ],
};
// Hàm tính tổng tiền của 1 đơn hàng
const calculateOrderTotal = (order) => order.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
// Hàm tính tổng tiền của hóa đơn
const calculateInvoiceTotal = (invoice) => invoice.orders.reduce((sum, order) => sum + calculateOrderTotal(order), 0);
// Hàm lấy các đơn hàng chưa thanh toán
const getUnpaidOrders = (invoice) => invoice.orders.filter((order) => !order.isPaid);
// Hàm in 1 đơn hàng
const printSingleOrder = (order) => {
    console.log(`Đơn hàng: ${order.orderId} - ${order.customerName}`);
    for (const { product, quantity, note } of order.items) {
        const lineTotal = product.price * quantity;
        console.log(`- (${product.name}) x ${quantity} → ${lineTotal} (note: ${note !== null && note !== void 0 ? note : "Không có"})`);
    }
    console.log(`Tổng đơn: ${calculateOrderTotal(order)}`);
    console.log(`Trạng thái: ${order.isPaid ? "Đã thanh toán" : "Chưa thanh toán"}`);
    console.log('----------------------------');
};
// Hàm in hóa đơn đầy đủ
const printInvoice = (invoice) => {
    console.log(`Hoá Đơn: ${invoice.invoice} - Ngày tạo: ${invoice.createAt.toLocaleString()}`);
    console.log("==== Danh sách đơn hàng ====");
    invoice.orders.forEach(printSingleOrder);
    console.log(`>> Tổng hoá đơn: ${calculateInvoiceTotal(invoice)}`);
};
// Hàm in các đơn chưa thanh toán
const printUnpaidOrders = (invoice) => {
    const unpaidOrders = getUnpaidOrders(invoice);
    console.log("=== Đơn hàng chưa thanh toán ===");
    if (unpaidOrders.length === 0) {
        console.log("Không có đơn hàng nào chưa thanh toán.");
        return;
    }
    unpaidOrders.forEach(printSingleOrder);
};
// ===== Thực thi =====
printUnpaidOrders(invoice);
console.log("=====================================");
printInvoice(invoice);

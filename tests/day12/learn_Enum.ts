// Task 2 – Declare and Access an Order Status Enum

enum orderStatus{
    placed=101,
    shipped=102,
    delivered=103,
    cancelled=104
}

console.log("Order status - Placed: " + orderStatus.placed);
console.log("Order status - Shipped: " + orderStatus.shipped);
console.log("Order status - Delivered: " + orderStatus.delivered);
console.log("Order status - Cancelled: " + orderStatus.cancelled);

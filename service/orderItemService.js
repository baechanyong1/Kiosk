const OrderItemRepository = require("../repository/orderItemRepository")

class OrderItemService {
    constructor() {
        this.orderItemRepository = new OrderItemRepository
    }
}

module.exports = OrderItemService
const OrderItemService = require("../service/orderItemService")

class OrderItemController {
    constructor(){
        this.orderItemService = new OrderItemService
    }
}

module.exports = OrderItemController
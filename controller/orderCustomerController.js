const OrderCustomerService = require("../service/orderCustomerService")

class OrderCustomerController {
    constructor(){
        this.orderCustomerService = new OrderCustomerService
    }
}

module.exports = OrderCustomerController
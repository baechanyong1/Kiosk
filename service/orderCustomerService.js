const OrderCustomerRepository = require("../repository/orderCustomerRepository")

class OrderCustomerService {
    constructor() {
        this.orderCustomerRepository = new OrderCustomerRepository
    }
}

module.exports = OrderCustomerService
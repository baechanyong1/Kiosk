const ItemOrderCustomer = require("../repository/itemOrderCustomerRepository")

class ItemOrderCustomerService {
    constructor() {
        this.itemOrderCustomer = new ItemOrderCustomer
    }
}

module.exports = ItemOrderCustomerService
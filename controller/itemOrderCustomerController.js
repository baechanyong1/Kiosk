const ItemOrderCustomerService = require("../service/itemOrderCustomerService")

class ItemOrderCustomerController {
    constructor(){
        this.itemOrderCustomerService = new ItemOrderCustomerService
    }
}

module.exports = ItemOrderCustomerController
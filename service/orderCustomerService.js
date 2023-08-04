const OrderCustomerRepository = require("../repository/orderCustomerRepository")

class OrderCustomerService {
    constructor() {
        this.orderCustomerRepository = new OrderCustomerRepository
    }

    create = async(itemId, option, amount, state)=>{
        const addOrder = await this.orderCustomerRepository.create(itemId, option, amount, state)
    return addOrder
    }

    update = async(id,state)=>{
        const updateOrder = await this.orderCustomerRepository.update(id,state)
        return updateOrder
    }
}

module.exports = OrderCustomerService
const itemOrderCustomerRepository = require("../repository/itemOrderCustomerRepository");

class ItemOrderCustomerService {
  constructor() {
    this.itemOrderCustomer = new itemOrderCustomerRepository();
  }
  addCart = async (itemId, count, option) => {
    const cart = await this.itemOrderCustomer.addCart(itemId, count, option);
    return cart;
  };

  deleteCart = async (itemOrderCustomerId, amount, state, option) => {
    const delCart = await this.itemOrderCustomer.deleteCart(
      itemOrderCustomerId,
      amount,
      state,
      option
    );
    return delCart;
  };
}

module.exports = ItemOrderCustomerService;

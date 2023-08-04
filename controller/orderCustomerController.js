const OrderCustomerService = require("../service/orderCustomerService");

class OrderCustomerController {
  constructor() {
    this.orderCustomerService = new OrderCustomerService();
  }
  createUser = async (req, res, next) => {
    const { name, password } = req.body;
    const user = await this.userService.createUser({ name, password });
    res.status(user.status).json(user.message);
  };

  create = async (req, res, next) => {
    const itemId = req.params;
    const { option, amount, state } = req.body;
    const order = await this.orderCustomerService.create(
      itemId,
      option,
      amount,
      state
    );
    res.status(order.status).json(order.message);
  };

  update = async (req, res, next) => {
    const id = req.params;
    const state = req.body;

    const update = await this.orderCustomerService.update(id, state);
    res.status(update.status).json(order.message);
  };
}

module.exports = OrderCustomerController;

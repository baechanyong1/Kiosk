const OrderItemService = require("../service/orderItemService");

class OrderItemController {
  constructor() {
    this.orderItemService = new OrderItemService();
  }

  orderItem = async (req, res, next) => {
    const userId = req.params;
    const itemId = req.query.id;
    const { amount, state } = req.body;
    const order = await this.orderItemService.orderItem({
      userId,
      itemId,
      amount,
      state,
    });
    res.status(order.status).json(order.message);
  };

  getOrder = async (req, res ,next) => {
    const userId = req.params;

    const get = await this.orderItemService.getOrder({ userId });
    res.status(get.status).json(get.message);
  };
}

module.exports = OrderItemController;

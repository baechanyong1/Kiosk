const OrderItemRepository = require("../repository/orderItemRepository");
const state = {
  ORDERED: 0,
  PENDING: 1,
  COMPLETED: 2,
  CANCELED: 3,
};

class OrderItemService {
  constructor() {
    this.orderItemRepository = new OrderItemRepository();
  }
  orderItem = async (itemId, amount, userId, state) => {
    const orderItem = await this.orderItemRepository.orderItem(itemId, amount, userId, state);
    return orderItem;
  };

  getOrder = async (userId) => {
    const getOrder = await this.orderItemRepository.getOrder(userId);
    return getOrder;
  };
}

module.exports = OrderItemService;

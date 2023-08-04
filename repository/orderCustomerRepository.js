const OrderCustomer = require("../database/model/orderCustomer");

//주문
class OrderCustomerRepository {
  async create({ itemId, option, amount, state }) {
    const order = await Item.findOne({ where: { itemId } });
    if (!order.itemId) {
      return {
        status: 400,
        message: "상품을 선택해주세요",
      };
    }
    await OrderCustomer.create({ itemId, option, amount, state });
    return { status: 200, message: order, option };
  }

  async update({ id, state }) {
    try {
      const order = await OrderCustomer.findOne({ where: { id } });
      if (order.id === id) {
        await OrderCustomer.update({ where: { state } });
        return {
          status: 200,
          message: "주문 상태 수정이 완료되었습니다",
        };
      }
    } catch (error) {
      console.log(error);
      return {
        status: 400,
        message: "주문 상태 수정 중 에러",
      };
    }
  }
}

module.exports = OrderCustomerRepository;

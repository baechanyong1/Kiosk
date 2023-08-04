const OrderItem = require("../database/model/orderItem");
const Item = require("../database/model/item");
const Sequelize = require("sequelize");

//발주
//enum 0 = ordered, 1 = pending, 2 = completed 트랜잭션 적용!, 3 = canceled
class OrderItemRepository {
  async orderItem({ itemId, amount, userId, state }) {
    const t = await Sequelize.transaction();

    try {
      const itemAmount = await Item.findByPk(itemId, { transaction: t });
      if (!userId) {
        return {
          status: 400,
          message: "권한이 없습니다",
        };
      }
      if (state === 2) {
        const orderItem = await OrderItem.create({
          itemId,
          amount,
          userId,
          state,
          amount,
        });
        const setAmount = (await itemAmount.amount) + 1;
        await Item.update(
          { amount: setAmount },
          { where: { id: itemId }, transaction: t }
        );
        await t.commit();
        return {
          status: 200,
          message: "발주가 완료되었습니다.",
        };
      }
    } catch (error) {
      console.log(error);
      await t.rollback;
      return { status: 400, message: "발주 중 에러 발생" };
    }
  }

  async getOrder({ userId }) {
    try {
      const getOrder = await OrderItem.findOne({ where: userId });
      return {
        status: 200,
        message: getOrder,
      };
    } catch (error) {
      console.log(error);
      return {
        status: 400,
        message: "발주 조회 중 에러",
      };
    }
  }
}

module.exports = OrderItemRepository;

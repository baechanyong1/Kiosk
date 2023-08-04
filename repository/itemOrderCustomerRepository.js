const ItemOrder = require("../database/model/option");
const OrderCustomer = require("../database/model/orderCustomer");
const Item = require("../database/model/item");

// 장바구니 프라이스는 나중?
class itemOrderCustomerRepository {
  async addCart(itemId, count, option) {
    try {
      const item = await Item.findOne({ where: itemId });
      const price = item.price + option.price;
      const create = await ItemOrder.create(item, amount, option, price);
      return { status: 200, message: `장바구니에 ${count}개를 담았습니다` };
    } catch (error) {
      console.log(error);
      return { status: 400, message: "장바구니에 담는 중 에러 발생" };
    }
  }

  async deleteCart(itemOrderCustomerId, amount, state, option) {
    try {
      const findCart = await ItemOrder.findOne({
        where: { itemOrderCustomerId },
        //찾아서 어디에 쓰지? 이 로직을 쓸 때의 생각 되짚어보기
      });
      if (state === 0) {
        await ItemOrder.destroy({ where: { itemOrderCustomerId } });
        return { status: 200, message: "장바구니에 담긴 상품을 삭제 했습니다" };
      } else {
        await ItemOrder.destroy({ where: { itemOrderCustomerId } });
        await OrderCustomer.create(itemOrderCustomerId, amount, option);
        return { status: 200, message: "상품 주문을 성공했습니다." };
      }
    } catch (error) {
      console.log(error);
      return { status: 400, message: "장바구니에 담긴 상품이 없습니다." };
    }
  }
}

module.exports = itemOrderCustomerRepository;

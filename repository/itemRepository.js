const Item = require("../database/model/item");
const User = require("../database/model/user");

//아이템에 optionId 추가
// 아이템에 이름이 없을 경우 이름 입력메시지, 음수일 경우도
class ItemRepository {
  async create({ name, price, type, userId }) {
    try {
      const existingItem = await Item.findOne({ where: { name } });
      if (existingItem) {
        return {
          status: 400,
          message: "존재하는 상품 입니다",
        };
      }
      const create = await Item.create({ name, price, type, userId });
      return { status: 200, create };
    } catch (error) {
      console.log(error);
      return { status: 400, message: "상품 생성 중 에러" };
    }
  }

  async delete({ userId, password, itemId }) {
    try {
      const checkedPassword = await User.findOne({ where: { id } });
      if (checkedPassword.password !== password) {
        return {
          status: 400,
          message: "비밀번호가 일치하지 않습니다.",
        };
      }
      const find = await Item.findOne({ where: { itemId } });
      if (find.amount === 0) {
        const deleteItem = await Item.delete(userId, password);
        return {
          status: 200,
          message: "상품 삭제 완료",
          deleteItem,
        };
      }
      return {
        status: 400,
        message: "상품이 남아있습니다",
      };
    } catch (error) {
      console.log(error);
      return { status: 400, message: "상품 삭제 중 에러" };
    }
  }

  async get() {
    try {
      const getItem = await Item.findAll();
      if (!getItem) {
        return {
          status: 400,
          message: "상품이 존재하지 않습니다",
        };
      }
      return {
        status: 200,
        message: getItem,
      };
    } catch (error) {
      console.log(error);
      return {
        status: 400,
        message: "상품 조회 중 에러",
      };
    }
  }

  async typeGet(type) {
    try {
      const getItem = await Item.findAll(type);
      if (!getItem) {
        return {
          status: 400,
          message: "상품이 존재하지 않습니다",
        };
      }
      return {
        status: 200,
        message: getItem,
      };
    } catch (error) {
      console.log(error);
      return {
        status: 400,
        message: "상품 조회 중 에러",
      };
    }
  }

  async update(name, price, type, userId, id, password) {
    try {
      const user = await User.findOne({ where: { userId } });
      if (!user) {
        return {
          status: 400,
          message: "권한이 없습니다",
        };
      }
      if (user.password !== password) {
        return {
          status: 400,
          message: "권한이 없습니다",
        };
      }
      const updateItem = await Item.update(
        { name, price, type },
        { where: { id } }
      );
      return {
        status: 200,
        message: "수정이 완료되었습니다.",
        updateItem,
      };
    } catch (error) {
      console.log(error);
      return {
        status: 400,
        message: "상품 수정 중 에러",
      };
    }
  }
}

module.exports = ItemRepository;

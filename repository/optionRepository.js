const Option = require("../database/model/option");
const User = require("../database/model/user");

class OptionRepository {
  async create({ extra, hot, shot, userId }) {
    try {
      if (!userId) {
        return {
          status: 400,
          message: "권한이 없습니다",
        };
      }
      const option = await Option.create({ extra, hot, shot, userId });
      return {
        status: 200,
        message: `옵션이 추가 되었습니다.`,
      };
    } catch (error) {
      console.log(error);
      return { status: 400, message: "옵션 추가 중 에러 발생" };
    }
  }
  async update({ extra, hot, shot, userId }) {
    try {
      const user = await Option.findOne({ where: { userId } });
      if (userId === user.userId) {
        await Option.update({ extra, hot, shot, userId });
        return {
          status: 200,
          message: "옵션이 변경되었습니다.",
        };
      }
      return {
        status: 400,
        message: "권한이 없습니다",
      };
    } catch (error) {
      console.log(error);
      return { status: 400, message: "옵션 변경 중 에러 발생" };
    }
  }
  async get() {
    try {
      const get = await Option.findAll();
      return {
        status: 200,
        message: "옵션 조회 성공",
      };
    } catch (error) {
      console.log(error);
      return { status: 400, message: "옵션 조회 중 에러 발생" };
    }
  }

  async deleteOption(optionId, userId, password) {
    try {
      const target = await Option.findOne({ where: { optionId } });
      const user = await User.findOne({ where: { userId } });
      if (!user) {
        return {
          status: 400,
          message: "권한이 없습니다",
        };
      }
      if (user.password === password) {
        return {
          status: 400,
          message: "비밀번호가 일치하지 않습니다.",
        };
      }
      const option = await Option.update(target);
      return {
        status: 200,
        message: "옵션 수정 완료",
      };
    } catch (error) {
      console.log(error);
      return { status: 400, message: "옵션 삭제 중 에러" };
    }
  }
}

module.exports = OptionRepository;

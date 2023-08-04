const OptionRepository = require("../repository/optionRepository");

class OptionService {
  constructor() {
    this.optionRepository = new OptionRepository();
  }
  create = async (extra, hot, shot, userId) => {
    const createOption = await this.optionRepository.create(
      extra,
      hot,
      shot,
      userId
    );
    return createOption;
  };

  update = async (extra, hot, shot, userId) => {
    const updateOption = await this.optionRepository.update(
      extra,
      hot,
      shot,
      userId
    );
    return updateOption;
  };

  get = async () => {
    const getOption = await this.optionRepository.get();
    return getOption;
  };

  deleteOption = async (userId, password) => {
    const delOption = await this.optionRepository.deleteOption(
      optionId,
      userId,
      password
    );
    return delOption;
  };
}

module.exports = OptionService;

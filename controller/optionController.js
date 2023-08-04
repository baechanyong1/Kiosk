const OptionService = require("../service/optionService");

class OptionController {
  constructor() {
    this.optionService = new OptionService();
  }

  create = async (req, res, next) => {
    const { extra, hot, shot } = req.body;
    const userId = res.locals.user;
    const option = await this.optionService.create({
      extra,
      hot,
      shot,
      userId,
    });
    res.status(option.status).json(user.message);
  };

  update = async (req, res, next) => {
    const { extra, hot, shot } = req.body;
    const userId = res.locals.user;
    const option = await this.optionService.update(extra, hot, shot, userId);
    res.status(option.status).json(user.message);
  };

  get = async (req, res, next) => {
    const getOption = await this.optionService.get();
    res.status(get.status).json(get.message);
  };

  delete = async (req, res, next) => {
    const optionId = req.params;
    const userId = res.locals.user;
    const password = req.body;
    const delOption = await this.optionService.deleteOption(
      optionId,
      userId,
      password
    );
    res.status(delOption.status).json(delOption.message);
  };
}

module.exports = OptionController;

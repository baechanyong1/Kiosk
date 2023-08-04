const UserService = require("../service/userService");

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  getUser = async (req, res, next) => {
    const { id } = res.locals.userService;

    const data = await this.userService.getUser(id);

    res.status(201).json(data);
  };

  createUser = async (req, res, next) => {
    const { name, password } = req.body;
    const user = await this.userService.createUser({ name, password });
    res.status(user.status).json(user.message);
  };

  login = async (req, res, next) => {
    const { name, password } = req.body;
    const login = await this.userService.login({ name, password });
    res.status(login.status).json(login.message);
  };

  deleteUser = async (req, res, next) => {
    const { password } = req.body;
    const { id } = res.params;
    const user = await this.userService.deleteUser({ password, id });
    res.status(user.status).json(user.message);
  };

  putUser = async (req, res, next) => {
    const { name, password } = req.body;
    const { userId } = res.params;
    const user = await this.userService.putUser(name, password, userId);
    res.status(user.status).json(user.message);
  };
}

module.exports = UserController;

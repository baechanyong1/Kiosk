const UserService = require("../service/userService")

class UserController {
    constructor(){
        this.userService = new UserService
    }
}

module.exports = UserController
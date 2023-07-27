const UserRepository = require("../repository/userRepository")

class UserService {
    constructor() {
        this.userRepository = new UserRepository
    }
}

module.exports = UserService
const router = require("express").Router()
const UserController = require("../controller/userController")
const userController = new UserController()

router.post("/signup", userController.createUser)

module.exports = router;
const router = require("express").Router();
const UserController = require("../controller/userController");
const userController = new UserController();

router.post("/signup", userController.createUser);
router.post("/login", userController.login);

router
  .route("/:userId")
  .put(userController.putUser)
  .delete(userController.deleteUser);

module.exports = router;

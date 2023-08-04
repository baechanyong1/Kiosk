const router = require("express").Router()
const ItemController = require("../controller/itemController")
const itemController = new ItemController

router.post("/:userId",itemController.createItem)
router.post("/",itemController.getItem)

router
.route("/:itemId")
.put(itemController.updateItem)
.delete(itemController.deleteItem)
module.exports = router;
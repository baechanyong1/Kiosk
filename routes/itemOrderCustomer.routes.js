const router = require("express").Router();
const ItemOrderCustomerController = require("../controller/itemOrderCustomerController");
const itemOrderCustomerController = new ItemOrderCustomerController();

router.post(itemOrderCustomerController.addCart);
router.delete("/:itemOrderId", itemOrderCustomerController.deleteCart);
module.exports = router;

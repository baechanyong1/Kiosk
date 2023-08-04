const router = require("express").Router();
const OrderItemController = require("../controller/orderItemController");
const orderItemController = new OrderItemController();

router
  .route()
  .post(orderItemController.orderItem)
  .get(orderItemController.getOrder);
module.exports = router;

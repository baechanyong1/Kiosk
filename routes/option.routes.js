const router = require("express").Router()
const OptionController = require("../controller/optionController")
const optionController = new OptionController

router()
.post(optionController.create)
.update(optionController.update)
// .get(optionController.get)
// .delete(optionController.deleteOption)
module.exports = router;
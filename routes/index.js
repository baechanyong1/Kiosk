const express = require("express")
const userRouter = require("./user.routes")
const itemRouter = require("./item.routes")
const itemOrderCustomerRouter = require("./itemOrderCustomer.routes")
const optionRouter = require("./option.routes")
const orderItemRouter = require("./orderItem.routes")
const orderCustomerRouter = require("./orderCustomer.routes")

const router = express.Router()


defaultRouters.forEach(r=>{
    router.use(r.path,r.router);
});

module.exports = router
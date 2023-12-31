const express = require("express")
const userRouter = require("./user.routes.js")
const itemRouter = require("./item.routes")
const itemOrderCustomerRouter = require("./itemOrderCustomer.routes")
const optionRouter = require("./option.routes")
const orderItemRouter = require("./orderItem.routes")
const orderCustomerRouter = require("./orderCustomer.routes")

const router = express.Router()

const defaultRouters = [
    {
        path : "/user",
        router : userRouter
    },
    {
        path : "/item,",
        router : itemRouter
    },
    {
        path : "/order,",
        router : itemOrderCustomerRouter
    },
    {
        path : "/option,",
        router : optionRouter
    },
    {
        path : "/orderItem,",
        router : orderItemRouter
    },
    {
        path : "/customer,",
        router : orderCustomerRouter
    },
]

defaultRouters.forEach(r=>{
    router.use(r.path,r.router);
});

module.exports = router
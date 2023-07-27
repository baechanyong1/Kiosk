// model
const User = require("./user")
const Item = require("./item")
const Option = require("./option")
const OrderItem = require("./orderItem")
const ItemOrderCustomer = require("./itemOrderCustomer")
const OrderCustomer = require("./orderCustomer")

//user
User.hasMany(Item)
//item
Item.belongsTo(User)
Item.hasMany(Option)
Item.hasMany(OrderItem)
Item.hasMany(ItemOrderCustomer)
//option
Option.belongsTo(Item)
//orderItem
OrderItem.belongsTo(Item)
//itemOrderCustomer
ItemOrderCustomer.belongsTo(Item)
ItemOrderCustomer.hasOne(OrderCustomer)
//orderCustomer
OrderCustomer.belongsTo(ItemOrderCustomer)


module.exports = [ User, Item, Option, OrderCustomer, OrderItem, ItemOrderCustomer]

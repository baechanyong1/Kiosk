// model
const User = require("./user");
const Item = require("./item");
const Option = require("./option");
const OrderItem = require("./orderItem");
const ItemOrderCustomer = require("./itemOrderCustomer");
const OrderCustomer = require("./orderCustomer");

//user
User.hasMany(Item);
User.hasMany(OrderItem)
//item
Item.belongsTo(User);
Item.belongsTo(Option);
Item.hasMany(OrderItem);
Item.hasMany(ItemOrderCustomer);
//option
Option.hasMany(Item);
//orderItem
OrderItem.belongsTo(Item);
OrderItem.belongsTo(User)
//itemOrderCustomer
ItemOrderCustomer.belongsTo(Item);
ItemOrderCustomer.hasOne(OrderCustomer);
//orderCustomer
OrderCustomer.belongsTo(ItemOrderCustomer);

module.exports = [
  User,
  Item,
  Option,
  OrderCustomer,
  OrderItem,
  ItemOrderCustomer,
];

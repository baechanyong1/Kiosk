const DataTypes = require("sequelize").DataTypes;
const connector = require("../db.js");

const OrderItem = connector.sequelize.define("orderItem", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  state: {
    type: DataTypes.ENUM,
    values: ["ORDERED", "PENDING", "COMPLETED", "CANCELED"],
    allowNull: false,
    defaultValue: "ORDERED",
  },
});

module.exports = OrderItem;

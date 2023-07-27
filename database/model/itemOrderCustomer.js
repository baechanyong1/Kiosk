const DataTypes = require('sequelize').DataTypes;
const connector = require('../db.js');

const ItemOrder = connector.sequelize.define('itemOrderCustomer',{
    id :{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true,
    },
    amount : {
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

module.exports = ItemOrder
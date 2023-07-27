const DataTypes = require('sequelize').DataTypes;
const connector = require('../db.js');

const OrderCustomer = connector.sequelize.define('orderCustomer',{
    id :{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true,
    },  
    state : {
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

module.exports = OrderCustomer
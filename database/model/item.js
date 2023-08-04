const DataTypes = require('sequelize').DataTypes;
const connector = require('../db.js');

const Item = connector.sequelize.define('item',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true,
    },
    name :{
        type:DataTypes.STRING,
        allowNull:false
    },
    price :{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    type :{
        type:DataTypes.ENUM,
        values : ['juice','bakery','etc'],
        allowNull:false
    },
    amount :{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0
    },
    count : {
        type:DataTypes.INTEGER,
        allowNull:true,
        defaultValue:1
    }
},{timestamps:false})

module.exports = Item
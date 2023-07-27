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
        type:DataTypes.INTEGER,
        allowNull:false
    },
    amount :{
        type:DataTypes.INTEGER,
        allowNull:false
    },
},{timestamps:false})

module.exports = Item
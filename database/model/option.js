const DataTypes = require('sequelize').DataTypes;
const connector = require('../db.js');

const Option = connector.sequelize.define('option',{
    id :{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true,
    },
    extra : {
        type:DataTypes.INTEGER,
        allowNull:true
    },
    shot :{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    hot :{
        type:DataTypes.BOOLEAN,
        allowNull:true
    }
})

module.exports = Option
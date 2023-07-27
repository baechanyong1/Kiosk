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
        allowNull:false
    },
    shot :{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    hot :{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

module.exports = Option
const {DataTypes } = require('sequelize');
const db = require('../utils/dataBase');

const List  = db.define('list',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title:{
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    status:{
        type: DataTypes.STRING(12),
        allowNull: false,
    }
})

module.exports = List;
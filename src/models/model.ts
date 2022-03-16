const {DataTypes} = require("sequelize");
// @ts-ignore
const sequelize = require('../util/database.ts')

// @ts-ignore
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        isEmail: true
    },
    password: {
        type: DataTypes.STRING,
        unique: true,
    }
});


module.exports = {
    User
}
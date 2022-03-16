const {DataTypes} = require("sequelize");
// @ts-ignore
const sequelize = require('../util/database.ts')

// @ts-ignore
const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
})


module.exports = {
    User
}
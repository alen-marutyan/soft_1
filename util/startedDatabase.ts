import {Sequelize} from "sequelize";
require('dotenv').config()

let sequelize = new Sequelize('dbname', 'postgres','a112233',{
    dialect: 'postgres',
    port: 5432,
    host: 'localhost'
})


module.exports = async function startDB() {
    try {
        await sequelize.authenticate()
        await sequelize.sync();
        return 'Database connect';
    }catch (e) {
        return 'Error: ' + e.message;
    }
}




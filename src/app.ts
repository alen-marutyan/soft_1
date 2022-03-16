// @ts-ignore
const express = require('express');
require('dotenv').config();
const http = require('http');
const app = express();
const Server = http.createServer(app)
// @ts-ignore
const sequelize = require('./util/database.ts')
const PORT = process.env.PORT || '3000';
const indexRouter = require('./routs/IndexRoute');

async function start() {
  try {
    await sequelize.authenticate()
    await sequelize.sync();
    return 'Database start';
  }catch (e) {
    return e.message
  }
}

start().then(data=>{
  console.log(data)
}).catch(err=>{
  console.log(err)
});

app.use(express.json());


app.use('/',indexRouter)


Server.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});




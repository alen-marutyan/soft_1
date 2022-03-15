// @ts-ignore
const express = require('express');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || '3000';
const indexRouter = require('../routs/UserRoute.ts');
const startedDatabase = require('../util/startedDatabase')




startedDatabase().then(data=>{
  console.log(data)
})

app.use('/',indexRouter)


app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});




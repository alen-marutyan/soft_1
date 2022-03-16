// @ts-ignore
let express = require('express')
// @ts-ignore
const router = express.Router()
const usersRouter = require('./UserRoute');


router.use('/user', usersRouter);


router.get('/', (req, res) => {
    res.send('Home Page')
})


module.exports = router;
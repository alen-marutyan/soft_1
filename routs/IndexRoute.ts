// @ts-ignore
let express = require('express')
// @ts-ignore
const router = express.Router()
const usersRouter = require('./UserRoute')

router.use('/user', usersRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('Home house')
});


module.exports = router;
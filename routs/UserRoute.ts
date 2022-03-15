// @ts-ignore
let express = require('express')
// @ts-ignore
const router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('Home')
});


module.exports = router;
// @ts-ignore
let express = require('express')
// @ts-ignore
const router = express.Router();
const {loginUser, registerUser, editUser,getUsersList} = require('../controllers/UserController')
const auth = require('../middleware/auth');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/edit', auth, editUser);
router.get('/list',auth, getUsersList);


module.exports = router;
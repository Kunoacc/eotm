let express = require('express');
let router = express.Router();
let parse = require('body-parser');
let parser = parse.urlencoded({extended: false});
let AuthController = require('../controllers/authController');
let AuthMiddleware = require('../middleware/authMiddleware');
let PagesController = require('../controllers/pagesController');


//Authentication Middleware.
/*router.use(AuthMiddleware.isLoggedIn);*/

/* GET home page. */
router.get('/', PagesController.index);

router.post('/login', parser , AuthController.login);


module.exports = router;

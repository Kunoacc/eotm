let express = require('express');
let router = express.Router();
let parse = require('body-parser');
let parser = parse.urlencoded({extended: false});
let HomeController = require('../controllers/homeController');
let AuthMiddleware = require('../middleware/authMiddleware');
require('../controllers/authController');


router.use(AuthMiddleware.isNotLoggedIn);

router.get('/', HomeController.home);

module.exports = router;

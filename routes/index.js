let express = require('express');
let router = express.Router();
let Kinvey = require('kinvey-node-sdk');
let parse = require('body-parser');
let parser = parse.urlencoded({extended: false});
require('dotenv').config();

Kinvey.initialize({
    appKey: process.env.APP_KEY,
    appSecret: process.env.APP_SECRET
}).then(function(activeUser) {
    console.log('success');
}).catch(function(error) {
    console.log('failed')
});

//GET users listing.
let auth = function (req, res, next) {
    if (Kinvey.User.getActiveUser()){
        let backURL = '/home';
        return res.redirect(backURL)
    }
    return next();
};
router.use(auth);

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.param('error')){
        return res.render('index', {error : 'You have to be logged in to view this page'})
    }
    res.render('index');
});

router.post('/login', parser ,function (req, res) {
    let email = req.body.email;
    let password = req.body.password;
    Kinvey.User.login(email, password).then(function (user) {
        res.send(user);
    }).catch(function (error) {
        res.send(error)
    });
});


module.exports = router;

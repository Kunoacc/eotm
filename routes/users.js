var express = require('express');
var router = express.Router();
let Kinvey = require('kinvey-node-sdk');
let parse = require('body-parser');
let parser = parse.urlencoded({extended: false});
require('dotenv').config();

Kinvey.initialize({
    appKey: process.env.APP_KEY,
    appSecret: process.env.APP_SECRET
});

//GET users listing.
let auth = function (req, res, next) {
    if (!Kinvey.User.getActiveUser()){
      let backURL = req.header('Referer') || '/';
      return res.redirect(backURL)
    }
    return next();
};
router.use(auth);

router.get('/', function(req, res, next) {
  res.render('home/index', {data: Kinvey.User.getActiveUser().data});
  console.log(Kinvey.User.getActiveUser().data);
});

module.exports = router;

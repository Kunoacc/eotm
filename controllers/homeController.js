const Kinvey = require('kinvey-node-sdk');
const session = require('express-session');
require('./authController');

exports.home = function (req, res) {
    res.render('home/index', {data: Kinvey.User.getActiveUser().data});
    console.log(Kinvey.User.getActiveUser().data);
};
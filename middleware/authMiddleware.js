const Kinvey = require('kinvey-node-sdk');
const session = require('express-session');

exports.isLoggedIn = function (req, res, next) {
        if (Kinvey.User.getActiveUser()){
            let backURL = '/home';
            return res.redirect(backURL);
        }
        return next();
    };

exports.isNotLoggedIn = function (req, res, next) {
    if (Kinvey.User.getActiveUser()){
        return next();
    }
    let backURL = req.header('Referer') || '/';
    req.session.loggedIn = false;
    res.redirect(backURL)
};

exports.hasRole = function (role) {

};
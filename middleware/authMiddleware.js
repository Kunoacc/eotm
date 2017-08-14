const Kinvey = require('kinvey-node-sdk');

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

exports.hasRole = function (req, res, next, role) {
    if (this.isLoggedIn){
        let currentRole = Kinvey.User.getActiveUser().data.role;
        if (currentRole === role){
            return next();
        }
        let backURL = req.header('Referer') || '/';
        req.session.hasRole = false;
        res.redirect(backURL);
    }
};
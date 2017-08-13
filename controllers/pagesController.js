require('./authController');
const session = require('express-session');

exports.index = function(req, res) {
    let loggedIn = req.session.loggedIn || null;
    if (loggedIn === false){
        req.session.loggedIn = null;
        return res.render('index', {'error' : 'You have to be logged in to view this page'})
    }
   return res.render('index');
};
let Kinvey = require('kinvey-node-sdk');
require('dotenv').config();

exports.kinvey = Kinvey.initialize({
    appKey: process.env.APP_KEY,
    appSecret: process.env.APP_SECRET
}).then(function(activeUser) {
    console.log('success');
}).catch(function(error) {
    console.log('failed')
});

exports.login = function (req, res) {
    let email = req.body.email;
    let password = req.body.password;
    Kinvey.User.login(email, password).then(function (user) {
        res.send(user);
    }).catch(function (error) {
        res.send(error)
    });
};
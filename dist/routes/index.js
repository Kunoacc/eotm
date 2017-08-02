'use strict';

var express = require('express');
var router = express.Router();
var Kinvey = require('kinvey-node-sdk');

//Initialize Kinvey
Kinvey.initialize({
    appKey: 'kid_HkVCmmC8Z',
    appSecret: 'f592a48e24374b029e0eed7a033d0e1d'
}).then(function (res) {
    console.log('success');
}).catch(function (error) {
    console.log('error');
});

/* GET home page. */
var promise = Kinvey.ping().then(function (response) {
    console.log('Kinvey Ping Success. Kinvey Service is alive, version: ' + response.version + ', response: ' + response.kinvey);
}).catch(function (error) {
    console.log('Kinvey Ping Failed. Response: ' + error.description);
});

router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
//# sourceMappingURL=index.js.map
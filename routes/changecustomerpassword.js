var express = require('express');
var router = express.Router();

/* GET changecustomerpassword page. */
router.get('/', function (req, res, next) {
    console.log("changecustomerpassword.js: GET");
    res.render('changecustomerpassword');
});

module.exports = router
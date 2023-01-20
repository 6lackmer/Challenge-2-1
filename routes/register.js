var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function (req, res, next) {
    console.log("register.js: GET");
    res.render('register', {});
});

/* POST login page, when the submit button is pressed */
router.post('/', function (req, res, next) {
    console.log("register.js: POST");
    res.redirect('/loginuser');
});


module.exports = router;

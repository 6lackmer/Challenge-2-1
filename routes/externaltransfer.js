var express = require('express');
var router = express.Router();

/* GET externaltransfer page. */
router.get('/', function (req, res, next) {
    console.log("externaltransfer.js: GET");
    res.render('externaltransfer');
});

module.exports = router;
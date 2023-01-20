var express = require('express');
var router = express.Router();

/* GET internaltransfer page. */
router.get('/', function (req, res, next) {
    console.log("internaltransfer.js: GET");
    res.render('internaltransfer');
})

module.exports = router;
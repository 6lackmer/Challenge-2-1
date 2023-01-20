var express = require('express');
var router = express.Router();

/* GET savingstransfer page. */
router.get('/', function (req, res, next) {
    console.log("savingstransfer.js: GET");
    res.render('savingstransfer');
});

module.exports = router;
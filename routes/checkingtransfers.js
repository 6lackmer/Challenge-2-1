var express = require('express');
var router = express.Router();

/* GET checkingtransfers page. */
router.get('/', function (req, res, next) {
    console.log("checkingtransfers.js: GET");
    res.render('checkingtransfers');
});

module.exports = router;
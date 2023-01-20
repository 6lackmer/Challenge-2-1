var express = require('express');
var router = express.Router();

/* GET customersearch page. */
router.get('/', function (req, res, next) {
    console.log("customersearch.js: GET");
    res.render('customersearch');
});

/* POST login page, when the submit button is pressed */
router.post('/', function (req, res, next) {
    console.log("loginuser.js: POST");

    // Submit is the name of the buttons. The values can differ and that is what we use to redirect
    submit = req.body.submit;

    if (submit == "search") { // if submit button has next value
        console.log("search btn pressed");
        res.render('customersearchresults', {});
    } else if (submit == "back") {
        console.log("back btn pressed");
        res.render('customersearch', {});
    } else if (submit == "home") { 
        console.log("home btn pressed");
        res.redirect('/home');
    } else if (submit == "savings") {
        console.log("saving btn pressed");
        res.redirect('/savingstransfer');
    } else if (submit == "checking") {
        console.log("checking btn pressed");
        res.redirect('/checkingtransfers');
    }

});

module.exports = router;
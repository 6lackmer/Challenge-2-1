var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    // Add functionality to render each diffrent page
    // res.render('employeehome');
    res.render('adminhome');
    // res.render('customerhome');
});

router.post('/', function (req, res, next) {
    console.log("loginuser.js: POST");

    // Submit is the name of the buttons. The values can differ and that is what we use to redirect
    submit = req.body.submit;

    if (submit == "checking") { // if submit button has next value
        console.log("checking btn pressed");
        res.redirect('/checkingtransfers');
    } else if (submit == "savings") {    // if submit button has login value
        console.log("savings btn pressed");
        res.redirect('/savingstransfer');
    } else if (submit == "internaltransfer") {    // if submit button has login value
        console.log("internal transfer btn pressed");
        res.redirect('/internaltransfer');
    } else if (submit == "externaltransfer") {    // if submit button has login value
        console.log("external transfer btn pressed");
        res.redirect('/externaltransfer');
    } else if (submit == "changepassword") {    // if submit button has login value
        console.log("change password btn pressed");
        res.redirect('/changepassword');
    } else if (submit == "customersearch") {    // if submit button has login value
        console.log("custome rsearch btn pressed");
        res.redirect('/customersearch');
    } else if (submit == "accountsearch") {    // if submit button has login value
        console.log("account search btn pressed");
        res.redirect('/accountsearch');
    } else if (submit == "logout") {    // if submit button has login value
        console.log("logout btn pressed");
        res.redirect('/loginuser');
    }
});
module.exports = router;

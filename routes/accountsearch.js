var express = require('express');
var router = express.Router();

/* GET accountsearch page. */
router.get('/', function (req, res, next) {
    console.log("accountsearch.js: GET");
    res.render('accountsearch');
});

/* POST login page, when the submit button is pressed */
router.post('/', function (req, res, next) {
    console.log("loginuser.js: POST");

    // Submit is the name of the buttons. The values can differ and that is what we use to redirect
    submit = req.body.submit;

    if (submit == "search") { 
        console.log("search btn pressed");
        res.render('accountsearchresults', {selectedValue: "employee"});
    } else if (submit == "back") {    
        console.log("back btn pressed");
        res.render('accountsearch', {});
    } else if (submit == "home") {   
        console.log("back btn pressed");
        res.redirect('/home');
    } else if (submit == "changepassword") { 
        console.log("change password btn pressed");
        res.redirect('/changecustomerpassword');
    }else if (submit == "changeposition") { 
        console.log("change position btn pressed");
        res.render('accountsearchresults', {selectedValue: "employee"});
    }

});

module.exports = router;
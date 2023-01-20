var express = require('express');
var router = express.Router();


/* GET login page. */
router.get('/', function (req, res, next) {
  console.log("loginuser.js: GET");
  res.render('loginuser', {});
});

/* POST login page, when the submit button is pressed */
router.post('/', function (req, res, next) {
  console.log("loginuser.js: POST");

   // Submit is the name of the buttons. The values can differ and that is what we use to redirect
   submit = req.body.submit;
   
   if (submit == "next") { // if submit button has next value
       console.log("next btn pressed");
       res.render('loginpassword', {});
   } else if (submit == "login") {    // if submit button has login value
       console.log("submit btn pressed");
       res.redirect('/home');
   }
});

module.exports = router;

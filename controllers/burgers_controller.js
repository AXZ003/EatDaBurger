var express = require('express');


// Import the model (burger.js) to use its database.

var burger = require('../models/burger.js');
var router = express.Router();

// NOT USED


// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {

    res.render("index");
  
});

// GET METHOD 
router.get('/burgers', function (req, res) {
	burger.all(function (data) {
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});


router.post("/burgers/create", function (req, res) {
	console.log(req.body)
  burger.create(["burger_name", "devoured"], [req.body.burger_name,0], function () { // data in parenthesis?
      res.redirect('/burgers');
    });
});


router.put("/burgers/update/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  console.log('condition', condition)
  burger.update({devoured: req.body.devoured}, condition, function () { // data in parenthesis?
    res.redirect('/burgers');
  });
});


router.delete("/burgers/delete", function (req, res) {
  burger.delete(function (data) {
    var hbsObject = {burgers: data};
    console.log(hbsObject);
    res.redirect('/burgers');
  });
});





module.exports = router;
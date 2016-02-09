var express = require('express');
var router = express.Router();
var randomNum = Math.random()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lesson 5', 
  	blog: 'Here it is' });

});

// Get About Page

router.get('/about', function(req, res, next) {
	// Show the about.ejs view
	res.render('about', { myName: "Orie"});

});


// Calculates a random number and pases it to view called "random"
router.get('/random', function(req, res, next) {
	// Show the about.ejs view
	res.render('random', { random: Math.random()});

});


module.exports = router;

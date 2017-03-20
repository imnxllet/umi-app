var express = require('express');
var router = express.Router();
var firebase = require('./firebase');

/* GET home page. */
router.get('/', function(req, res, next) {
	//var user = firebase.auth().currentUser;

  if (!req.session.user) {
    // User is signed in.
    res.render('yelp_mobile_index', {user: 'User is not logged in'});
  } else {
    // No user is signed in.
    res.render('yelp_mobile_index', {user: 'User islogged in'});
  }
  
});

/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

module.exports = router;

var express = require('express');
var router = express.Router();
var firebase = require('./firebase');




/* GET sign-up page. */
router.get('/', function(req, res, next) {
  res.render('yelp_mobile_signUp');
});

/*Sign up a user.*/
router.post('/', function(req, res, next) {

  var email = req.body.email;
  var password = req.body.password;
  console.log("Email: " + email + ", Password: " +password + "wanna signup..\n");



 firebase.auth().createUserWithEmailAndPassword(email, password).then(function(authData){
   var user = firebase.auth().currentUser;
   user.sendEmailVerification(); 
  if (user) {
    // User is signed in.
    if(user.emailVerified){
    	req.session.user = user;
    	req.session.save();
   		// res.send('user logged in!')
    	res.redirect('/');
    }else{
    	res.send("Verify your email");
    }

  } else {
    // No user is signed in.
    res.send('user not logged in!')
  }
 }).catch(function(error) {
  // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...

    console.log("Error: " + errorCode + ": " + errorMessage);
 });

 
  

  /*firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
     res.send('user logged in!');
  } else {
    // No user is signed in.
    res.send('user not logged in!');
  }
});*/

});
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

module.exports = router;

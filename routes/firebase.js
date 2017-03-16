/* Firebase SDK, add project. */ 
var express = require('express');
/* Initialize Firebase */
var firebase = require("firebase-admin");
var serviceAccount = require("../public/firebase-config/serviceAccountKey.json");
	
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://umi-app.firebaseio.com"
});


module.exports = firebase;
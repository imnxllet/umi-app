/* Firebase SDK, add project. */ 
var express = require('express');
/* Initialize Firebase */
var firebase = require("firebase");
var config = {
  apiKey: "AIzaSyBOsAAfw52Oc0Aw-S-o4GDs_QgfksA87vc",
  authDomain: "umi-app.firebaseapp.com",
  databaseURL: "https://umi-app.firebaseio.com",
  storageBucket: "umi-app.appspot.com"
};

firebase.initializeApp(config);



module.exports = firebase;
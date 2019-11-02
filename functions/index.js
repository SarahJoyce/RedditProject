// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
const auth = firebase.auth();
const db = firebase.firestore();

var provider = new firebase.auth.GithubAuthProvider();
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');

admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
	response.send("Hello World!");
});

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

	var modals = document.querySelectorAll('.modal');
	M.Modal.init(modals);
  
	var items = document.querySelectorAll('.collapsible');
	M.Collapsible.init(items);
  
  });
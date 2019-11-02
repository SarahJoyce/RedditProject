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
/* 
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	// Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;
	// [START_EXCLUDE]
	if (errorCode == 'auth/weak-password') {
	  alert('The password is too weak.');
	} else {
	  alert(errorMessage);
	}
	console.log(error);
	// [END_EXCLUDE]
  });
  // [END createwithemail]

firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
	// Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;
	// [START_EXCLUDE]
	if (errorCode === 'auth/wrong-password') {
		alert('Wrong password.');
	} else {
		alert(errorMessage);
	}
	console.log(error);
	document.getElementById('quickstart-sign-in').disabled = false;
	// [END_EXCLUDE]
});
// [END authwithemail]
document.getElementById('quickstart-sign-in').disabled = true;

// Callback fires off any time authentication state changes
// user logs in firebaseUser will be populated with firebase user 
// if user logs out fill with NULL
auth.onAuthStateChanged(firebaseUser => { });

firebase.auth().signInWithPopup(provider).then(function (result) {
	// This gives you a GitHub Access Token. You can use it to access the GitHub API.
	var token = result.credential.accessToken;
	// The signed-in user info.
	var user = result.user;
	// ...
}).catch(function (error) {
	// Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;
	// The email of the user's account used.
	var email = error.email;
	// The firebase.auth.AuthCredential type that was used.
	var credential = error.credential;
	// ...
});

firebase.auth().signOut().then(function () {
	// Sign-out successful.
}).catch(function (error) {
	// An error happened.
});
 */
// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

	var modals = document.querySelectorAll('.modal');
	M.Modal.init(modals);
  
	var items = document.querySelectorAll('.collapsible');
	M.Collapsible.init(items);
  
  });
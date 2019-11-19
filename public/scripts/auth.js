var name, email, photoUrl, uid, emailVerified;

// logout
function logout() {
	firebase.auth().signOut().then(function () {
	console.log("You have logged out successfully");
		// Sign-out successful.
	}).catch(function (error) {
		// An error happened.
	});
};

// login
function login() {
	var provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider).then(function (result) {
		// This gives you a Google Access Token. You can use it to access the Google API.
		var token = result.credential.accessToken;
		// The signed-in user info.
		var user = result.user;
		console.log("you're in the log in function");
		if (user != null) {
			name = user.displayName;
			email = user.email;
			photoUrl = user.photoURL;
			emailVerified = user.emailVerified;
			uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
			// this value to authenticate with your backend server, if
			// you have one. Use User.getToken() instead.
		}
	}).catch(function (error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// The email of the user's account used.
		var email = error.email;
		// The firebase.auth.AuthCredential type that was used.
		var credential = error.credential;
	});
};
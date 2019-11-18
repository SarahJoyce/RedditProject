<<<<<<< HEAD
// listen for auth status changes
auth.onAuthStateChanged(user => {
	if (user) {
		return db.collection('guides').get().then(snapshot => {
			setupGuides(snapshot.docs);
			setupUI(user);
		});
	} else {
		setupUI();
		setupGuides([]);
	}
});

// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
	e.preventDefault();

	// get user info
	const email = signupForm['signup-email'].value;
	const password = signupForm['signup-password'].value;

	// sign up the user
	auth.createUserWithEmailAndPassword(email, password).then(() => {
		// close the signup modal & reset form
		const modal = document.querySelector('#modal-signup');
		M.Modal.getInstance(modal).close();
		signupForm.reset();
	});
});

=======
>>>>>>> 1fa87c970dcb4b3aa485d5503c1b617afd213c13
// logout
function logout () {
  auth.signOut();
  document.getElementById("logged-out");
};

// login
<<<<<<< HEAD
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
	e.preventDefault();

	// get user info
	const email = loginForm['login-email'].value;
	const password = loginForm['login-password'].value;

	// log the user in
	return auth.signInWithEmailAndPassword(email, password).then(() => {
		// close the signup modal & reset form
		const modal = document.querySelector('#modal-login');
		M.Modal.getInstance(modal).close();
		loginForm.reset();
	});

});
=======
function login(){
  var provider = new firebase.auth.GoogleAuthProvider();
  
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    document.getElementById("logged-in");
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
  });
}
>>>>>>> 1fa87c970dcb4b3aa485d5503c1b617afd213c13

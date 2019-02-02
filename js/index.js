
  //listens for user authentication status.
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.location.href = "./categories.html";
    //loopForUserAgendas(currentUserRef);
  } else {
    console.log('user not logged in');
  }
});

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect
      //automatically or whether we leave that to developer to handle.
      var userName = $('[name="name"]').val();
      //if user gets to type in the user name, it means a new user is
      //signing up.
      if (typeof userName != typeof undefined) {
        console.log('username is defined');
        var email = $('[name="email"]').val();
        var userUid = firebase.auth().currentUser.uid;
        console.log("input values:\nemail: " + email + '\nusername:' +
          userName + '\nuid:' + userUid);
        firebase.database().ref('users/' + userUid).set({
          displayName: userName,
          email: email,
        });
      }
      //delay the page redirection for 2 seconds so that new user's
      //data can be written into the database.
      setTimeout(function() {
        window.location.href='categories.html';
      }, 2000);
      console.log('user exists, skipped over if statement');
    }, uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'redirect',
  signInSuccessUrl: '#',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: 'termsOfService.html',
  // Privacy policy url.
  privacyPolicyUrl: 'privacyPolicy.html'
};
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
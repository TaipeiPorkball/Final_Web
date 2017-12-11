$(document).ready(function(){
  // Initialize Firebase
  var config = {
     apiKey: "AIzaSyBj8tKtcNI0ThBbJiJMRTOQCJcqQfXf8wg",
     authDomain: "authenticator-30e3d.firebaseapp.com",
     databaseURL: "https://authenticator-30e3d.firebaseio.com",
     projectId: "authenticator-30e3d",
     storageBucket: "",
     messagingSenderId: "893258469799"
   };
   firebase.initializeApp(config);
  var dbRef = firebase.database().ref().child('object');
  const $email = $('#email');
  const $password = $('#password');
  const $emailup = $('#emailup');
  const $passwordup = $('#passwordup');
  const $btnSignIn = $('#btnSignIn');
  const $btnSignUp = $('#btnSignUp');
  const $btnSignOut = $('#btnSignOut');
  const $signInfo= $('.sign-info');


  // SignIn
  $btnSignIn.click(function(e){
    const email = $email.val();
    const pass = $password.val();
    const auth = firebase.auth();
    // signIn
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(function(e){
      console.log(e.message);
      $signInfo.html(e.message);
    });
  });

  // SignUp
  $btnSignUp.click(function(e){
    const emailup = $emailup.val();
    const passup = $passwordup.val();
    const auth = firebase.auth();
    // signUp
    const promise = auth.createUserWithEmailAndPassword(emailup, passup);
    promise.catch(function(e){
      console.log(e.message);
      $signInfo.html(e.message);
    });
  });

  // Listening Login User
  firebase.auth().onAuthStateChanged(function(user){
    if(user) {
      console.log(user);
      $signInfo.html(" Welcome! "+user.email+". Nice to meet you!");
      user.providerData.forEach(function (profile) {
        console.log("Sign-in provider: "+profile.providerId);
        console.log("  Provider-specific UID: "+profile.uid);
        console.log("  Name: "+profile.displayName);
        console.log("  Email: "+profile.email);
        console.log("  Photo URL: "+profile.photoURL);
      });
    } else {
      console.log("not logged in");
    }
  });

  // Signout
  $btnSignOut.click(function(){
    firebase.auth().signOut();
  });
});

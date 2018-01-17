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
  const $btnSubmit = $('#btnSubmit');
  const $file = $('#file');
  const $profileName = $('#profile-name');
  const $profileEmail = $('#profile-email');

  var $signInfo= $('.error-info');
  var $loginInfo= $('.login-info');

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
      setTimeout(function(){ $signInfo.html(" "); }, 1000); //important
      });
      promise.then(function(e){
        window.location.href = "./brown-line-member.html";
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
      setTimeout(function(){ $signInfo.html(" "); }, 1000);
    });
    promise.then(function(e){
      window.location.href = "./brown-line-member.html";
      });
  });

  // Listening Login User
  firebase.auth().onAuthStateChanged(function(user){
    if(user) {
      console.log(user);
      $profileName.html(user.displayName);
      $profileEmail.html(user.email);
      $img.attr("src",user.photoURL);
      user.providerData.forEach(function (profile) {
        console.log("Sign-in provider: "+profile.providerId);
        console.log("  Provider-specific UID: "+profile.uid);
        console.log("  Name: "+profile.displayName);
        console.log("  Email: "+profile.email);
        console.log("  Photo URL: "+profile.photoURL);
      });
    } else {
      console.log("not logged in");
      $profileName.html("N/A");
      $profileEmail.html('N/A');
      $img.attr("src","");
    }
  });

  // Signout
  $btnSignOut.click(function(){
    firebase.auth().signOut();
    window.location.href = "./brown-line.html";
  });

  $btnSubmit.click(function(){
  const user = firebase.auth().currentUser;
  const $userName = $('#userName').val();
  const $photoURL = $('#photoURL').val();

  const promise = user.updateProfile({
    displayName: $userName,
    photoURL: $photoURL
  });
  promise.then(function() {
    console.log("Update successful.");
    window.location.href = "./index.html";
    });
  });
});

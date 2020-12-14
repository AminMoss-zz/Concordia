document.addEventListener('DOMContentLoaded', function() {
  console.log("gooasds");
  const firebaseConfig = {
    apiKey: "AIzaSyBk2ASLYrYjlozrtpbZLuPHHEoVK67QOtc",
    authDomain: "data-base-7900c.firebaseapp.com",
    databaseURL: "https://data-base-7900c.firebaseio.com",
    projectId: "data-base-7900c",
    storageBucket: "data-base-7900c.appspot.com",
    messagingSenderId: "387767886853",
    appId: "1:387767886853:web:8c47ef3cf0a6f00ce5286c",
    measurementId: "G-40NZ96DRM8"
  };

  firebase.initializeApp(firebaseConfig);
  console.log(firebase);

  //const auth = firebase.auth();
  const db = firebase.database();
  console.log(db);


  const ref = db.ref;



  var x = ref("array");
  x.on('value', function(value){
    console.log(value);
  });
});
/*
var btn = document.getElementById('fblogin');

btn.onclick= () => {
    console.log('sfsdsd');

    var provider = new firebase.auth.FacebookAuthProvider();

    auth.signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(token);
        console.log(user);
        // ...
      }).catch(function(error) {
        console.log(error);
        //TODO redirect to login pade
      });
}*/

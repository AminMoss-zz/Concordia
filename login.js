
// PUT CORRECT FIREBASE CONFIG
var firebaseConfig = {
    apiKey: "AIzaSyDkxpDkG8e4yq6ViX03IN_0LEAPAdJjGxU",
    authDomain: "covid-19-hackathon-f077a.firebaseapp.com",
    databaseURL: "https://covid-19-hackathon-f077a.firebaseio.com",
    projectId: "covid-19-hackathon-f077a",
    storageBucket: "covid-19-hackathon-f077a.appspot.com",
    messagingSenderId: "809512466857",
    appId: "1:809512466857:web:3ed27649c25d27edb7ecb8",
    measurementId: "G-TL72QDC08Z"
};


firebase.initializeApp(firebaseConfig);
console.log(firebase);

const auth = firebase.auth();
const db = firebase.firestore();


auth.onAuthStateChanged(user => {
  if(user)
  {
    console.log('USER GDFGDFGDFGDfgdf');
    console.log(user);
    
    window.location.replac('/');
  }else
  {
    console.log('Not signed in yet');
    
  }
});


var loginbtn = document.getElementById('fblogin');

loginbtn.onclick= () => {
    console.log('sfsdsd');
    
    var provider = new firebase.auth.FacebookAuthProvider();
    
    auth.signInWithPopup(provider).then(function(result) {
        /*var token = 'Bearer ' + result.credential.accessToken;
        var user = result.user;
        console.log(token);*/
        console.log(user);
        console.log({ 
          token: token,
          userHandle: user.displayName,
          photoURL: user.photoURL
       });
        
        // ...
      }).catch(function(error) {
        console.log(error);
        window.location.replace('/login');
      });
      
}

var logoutbtn = document.getElementById('logout');

logoutbtn.onclick = ()=>{
  auth.signOut().then(()=>{
    console.log('signout');
    window.location.replace('/login');
  });
}
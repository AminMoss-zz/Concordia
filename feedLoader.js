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

/*
auth.onAuthStateChanged(user => {
  if(user)
  {
    console.log('USER GDFGDFGDFGDfgdf');
    console.log(user);
    
    //window.location.href = '/feed';
  }else
  {
    console.log('Not signed in yet');
    auth.signOut();
    window.location.replace('/login');
  }
});
*/

var loadPostsBtn = document.getElementById('loadPosts');

loadPostsBtn.onclick= () => {
    db.collection('posts')
    .get()
    .then((data) => {
      let posts = [];
      data.forEach((doc) => {
        posts.push({
          postId: doc.id,
          title: doc.data().title,
          body: doc.data().body,
          userHandle: doc.data().userHandle,
          createdAt: doc.data().createdAt,
          comments: [],
          userImage: doc.data().userImage,
          location: doc.data().location
        });
      });
      console.log(posts);
      
      $('#postsView').text(posts);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};

var signoutbtn = document.getElementById('signout');

signoutbtn.onclick = ()=>{
    console.log('gd gd gdf gdf');
    auth.signOut();
    window.location.replace('/sessionLogout');
}

/*
ref.on("value", function(snapshot) {
    let data = snapshot.val();
    //console.log(data)

    var container = document.getElementById("container")

    //loop over users
    Object.keys(data).forEach(function(userItr) {
        let userObj = data[userItr]

        Object.keys(userObj).forEach(function(prop) {

            //creating elements
            let post = createDiv("post")
            let postBorder = createDiv("postBorder")
            let user = createDiv("user")
            let pfp = createDiv("pfp")
            let contentDiv = createDiv("contentdiv")
        
            let userName = document.createElement("h2")
            userName.classList.add("username")
            let content = document.createElement("p")
            content.classList.add("content")


            //adding data to elements
            if (prop === "subject")
                pfp.append(document.createTextNode(userObj[prop]))
            

            if (prop === "content")
                content.append(document.createTextNode(userObj[prop]))



            //constructing post element
            post.appendChild(postBorder)
                postBorder.appendChild(user)
                    user.appendChild(pfp)
                    user.appendChild(userName)
                postBorder.appendChild(contentDiv)




        });
    });




}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});

function createDiv( className ){
    let element = document.createElement("div")
    element.classList.add(className)
    return element
}*/
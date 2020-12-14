var config = {
    apiKey: "AIzaSyBk2ASLYrYjlozrtpbZLuPHHEoVK67QOtc",
    authDomain: "data-base-7900c.firebaseapp.com",
    databaseURL: "https://data-base-7900c.firebaseio.com/",
    projectId: "data-base-7900c",
    storageBucket: "data-base-7900c.appspot.com",
    messagingSenderId: "387767886853",
    appId: "1:387767886853:web:8c47ef3cf0a6f00ce5286c",
    measurementId: "G-40NZ96DRM8"
  };
  firebase.initializeApp(config);
  var database = firebase.database();



console.log(document.data)

function addMap(element){
    var uluru = { lat: -25.344, lng: 131.036 };
      var map1 = new google.maps.Map(
        element, {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    var marker1 = new google.maps.Marker({
      position: uluru,
      map: map1,
    });
}

function initMap() {
    let maps = document.getElementsByClassName("map");


    for(let i=0; i<=10; i++){
      let elm = maps[i];
      let checkExist = setInterval(function(){
        let elm = document.getElementsByClassName("map")[i];
        if(elm != undefined){
          addMap(elm);
          clearInterval(checkExist);
        }
        else {
          console.log("retrying " + i);
          console.log(document.data.length);
          if(document.data != undefined){
            if(document.data.length <= i){
              clearInterval(checkExist)
            }
          }
        }

    //    if( document.data != undefined && document.data.length <= i){
  //        clearInterval(checkExist);
    //    }
      },
    1000);
    }
    // The location of Uluru




  }


let ref = database.ref("array");
ref.on("value", function(snapshot) {
    let data = snapshot.val();
    //console.log(data)
    //loop over users
    console.log("Data:");
    let container = document.getElementById("container");
    document.data = data;
    for(var i=0; i<data.length; i++){
      //    makeMap();

          console.log(data[i]);
          //creating elements
          let post = createDiv("post")
          let postBorder = createDiv("postBorder")
          let user = createDiv("user")
          let pfp = createDiv("pfp")

          let userName = document.createElement("h2")
          userName.classList.add("username")
          let link = document.createElement("a");

          let subjectDiv = createDiv("subjectDiv");
          let subjectH2 = document.createElement("subjectH2");
          subjectH2.classList.add("subjectH2");
          subjectH2.innerText=data[i].subject

          let contentDiv = createDiv("contentdiv")
          let content = document.createElement("p")
          content.classList.add("content")

          content.innerText= data[i].content;
          link.innerText = userName || "random name";

          let map = createDiv("map");
          map.setAttribute('id',"map" + (i+1) );
          let script = document.createElement('script');

          container.appendChild(post);
           post.appendChild(postBorder);
           postBorder.appendChild(user);
           user.appendChild(pfp);
           user.appendChild(userName);
           postBorder.appendChild(subjectDiv);
           subjectDiv.appendChild(subjectH2);
           postBorder.appendChild(contentDiv)
           contentDiv.appendChild(content);

          post.appendChild(map);
          post.appendChild(script);
      //    script.setAttribute("src", "https://maps.googleapis.com/maps/api/js?key=AIzaSyDiXueHsLIsYcnjjppxwoQOzMKmbzbQkE0&callback=addMap");

            var x  = document.getElementById('map1');
            console.log(x);
    }



}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});

function createDiv( className ){
    let element = document.createElement("div")
    element.classList.add(className)
    return element;
}
/*
function addMap(element){

  var uluru = { lat: -25.344, lng: 131.036 };

  var map1 = new google.maps.Map(element, {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  var marker1 = new google.maps.Marker({
    position: uluru,
    map: map1,
  });
}
  function initMap() {
    console.log("watiing");
    setTimeout(function(){ console.log("Hello"); }, 3000);
    // The location of Uluru
    addMap(
      document.getElementsByClassName("map");
    );
/*
    setInterval(function(){
      if(document.getElementById("map1"))
    }, 100);

  }

*/

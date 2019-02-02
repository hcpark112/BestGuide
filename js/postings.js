var config = {
  apiKey: "AIzaSyBW4SwDx_bHK5q2rGUaIpkkd1f5oQtOgPI",
  authDomain: "bestguide-5cf48.firebaseapp.com",
  databaseURL: "https://bestguide-5cf48.firebaseio.com",
  projectId: "bestguide-5cf48",
  storageBucket: "bestguide-5cf48.appspot.com",
  messagingSenderId: "317780907451"
};
firebase.initializeApp(config);

var postingsRef = firebase.database().ref('postings');

var count = 0;
var row = 0;

postingsRef.child("AF").once("value", function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    let arr = [];
    childSnapshot.forEach(function(snap) {
      arr.push(snap.val());
    });
    
    // console.log(count++);
    if(count == 4){
      row++;
      count = 0;
    }
    else{

      console.log(arr[1] + " " + arr[2]);
      let card = $("<div class='card ml-1 mb-2' style='width: 18rem;'></div>");
      let cardBody = $("<div class='card-body'></div>");
      let h5 = $("<h5 class='card-title'></h5>");
      let p = $("<p class='card-text'></p>");
      let a = $("<a class='btn btn-primary'></a>");

      $(h5).html(arr[1] + " " + arr[2]);
      $(p).html("Phone: " + arr[3] + "</br>Skill: " + arr[4]);
      $(a).html("Contact");

      $(a).attr("href", "mailto:"+arr[0]);

      $("#tester"+row).append(card);
      $(card).append(cardBody);
      $(cardBody).append(h5);
      $(cardBody).append(p);
      $(cardBody).append(a);
      console.log(row);
      console.log(count);
      count++;
    }
  });
});

// function loopForUserGroups(currentUserRef) {
//    currentUserRef.child('groups').once('value').then(function(snapshot) {
//      var contains = snapshot.exists();
//      if (!contains) {
//        // $('#roomSpace').text('No Groups Yet.');
//        // console.log('No group data.');
//      } else {
//        console.log('Start looping for info.');
//        $('#roomSpace').text('');
//        snapshot.forEach(function(childSnapshot) {
//          var uid = childSnapshot.key;
//          console.log('groupUid: ' + uid + '\n');
//          retrieveGroupInfo(uid);
//        });
//      }
//    });
//  }

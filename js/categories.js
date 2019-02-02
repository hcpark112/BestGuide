
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBW4SwDx_bHK5q2rGUaIpkkd1f5oQtOgPI",
  authDomain: "bestguide-5cf48.firebaseapp.com",
  databaseURL: "https://bestguide-5cf48.firebaseio.com",
  projectId: "bestguide-5cf48",
  storageBucket: "bestguide-5cf48.appspot.com",
  messagingSenderId: "317780907451"
};
firebase.initializeApp(config);

console.log(firebase.auth().currentUser.uid);

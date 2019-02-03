
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

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ["People helped", "Help received", "People looking for your skill sets"],
        datasets: [{
            backgroundColor: ["blue", "yellow", "red"],
            data: [5, 3, 20],
        }]
    },

    // Configuration options go here
    options: {}
});

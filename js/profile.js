$(function() {

  console.log(firebase.auth().currentUser.uid);
    $('#postButton').on('click', function() {
    
      firebase.database().ref('posts/').update({
      displayName: "me",
      email: "email",
      
      });
    });
});

$(function() {
  //listens for user authentication status.
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
     console.log(user.uid);
    //loopForUserAgendas(currentUserRef);
    } else {
      
      window.location.href = "./index.html";
    }
  });

  $(document).on('click', '.custom-card',
  function redirect() {
    window.location.href = "./postings.html#" + $(this).attr('id');
  });
});
  

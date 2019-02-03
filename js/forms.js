$('select[name="select_dept"]').on('change',function(){
   var selectedVal = $(this).val();
   switch(selectedVal){
       case 'Geek Squad':
                   $('.AF_skill').hide();
                   $('.GS_skill').show();
                   $('.marketing_skill').hide();
             break;
       case 'Marketing':case 'Marketing':
                   $('.GS_skill').hide();
                   $('.AF_skill').hide();
                   $('.marketing_skill').show();
             break;
       case 'Choose...':case 'Choose...':
                   $('.GS_skill').hide();
                   $('.AF_skill').hide();
                   $('.marketing_skill').hide();
             break;
       case 'Accounting/Finance':case 'Accounting/Finance':
                   $('.GS_skill').hide();
                   $('.AF_skill').show();
                   $('.marketing_skill').hide();
             break;
      default: //change this according to your need
             break;
   }
});


//listens for user authentication status.
firebase.auth().onAuthStateChanged(function(user) {
if (user) {
      console.log(user.uid);
//loopForUserAgendas(currentUserRef);
} else {
      window.location.href = "./index.html";
}
});

// Get a reference to the database service
var database = firebase.database();

var submit = $('#postButton');

// var dept = $('select[name="select_dept"]').val();

submit.on('click', function(){
  var dept = $('#inputDept :selected').text();
  console.log(dept+"  test");

   switch (dept) {
     case 'Accounting/Finance':
      firebase.database().ref('postings/Accounting_Finance').push({
      FName: $('#inputFName').val(),
      Lname: $('#inputLName').val(),
      Email: $('#inputEmail').val(),
      Phone: $('#inputPhone').val(),
      Skill: $('#AF :selected').text()
    });
       break;
     case 'Geek Squad':
     console.log(dept+"test");

     firebase.database().ref('postings/Geek_Squad').push({
     FName: $('#inputFName').val(),
     Lname: $('#inputLName').val(),
     Email: $('#inputEmail').val(),
     Phone: $('#inputPhone').val(),
     Skill: $('#GS :selected').text()
   });
      break;
     case 'Marketing':
     firebase.database().ref('postings/Marketing').push({
     FName: $('#inputFName').val(),
     Lname: $('#inputLName').val(),
     Email: $('#inputEmail').val(),
     Phone: $('#inputPhone').val(),
     Skill: $('#marketing :selected').text()
   });
     break;
     default:
     console.log('error');

   }




})

$(function() {

  $('#postButton').on('click', function() {
    let skills = {};
    $('input[name="skillSets"]:checked').each(function() {
      skills[$(this).val()] = true;
    });
    console.log(skills);
    let newProfile = {
      displayName: $('#inputDName').val(),
      firstName: $('#inputFName').val(),
      lastName: $('#inputLName').val(),
      email: $('#inputEmail').val(),
      phoneNum: $('#inputPhone').val(),
      skillSets: skills,
    };
    console.log(newProfile);
  });
});
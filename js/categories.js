
$(function() {

  $(document).on('click', '.custom-card',
  function redirect() {
    window.location.href = "./postings.html#" + $(this).attr('id');
  });
});
  

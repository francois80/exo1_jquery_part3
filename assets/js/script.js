$(function(){
  var nb = 0;
  $('#button').click(function(){
    nb += 1;
    $('#text').val(nb);
  });
});

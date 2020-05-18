var ajaxRequest;
var jsonObj;
var uname = '';
$(document).ready(function(){
  $("#login1").click(function(){
 {
  uname = $('#userid').val();
  var pass = $('#pwd').val();

  console.log('in',uname, pass);

  $.getJSON('users.json', function(data) {
    try{
      if(data[email].pwd == pwd){
        $('#msg').html("Logged in successfully");
      } else {
        $('#msg').html("Invalid Username/Password");
      }
    } catch (e) {
      $('#msg').html("Invalid Username/Password");
    }
  });
}




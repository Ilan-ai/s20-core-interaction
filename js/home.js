$(document).ready(function(){

  $("#circle1").on("click", function(){
    $("#list").css("visibility","visible")
    $("footer").css("visibility","hidden")
    $("#about_text").css("visibility","hidden")
    $("#name").css("visibility","hidden")
});

$("#triangle3").on("click", function(){
  $("#about_text").css("visibility","visible")
  $("#name").css("visibility","visible")
  $("footer").css("visibility","hidden")
  $("#list").css("visibility","hidden")
});

$("#square2").on("click", function(){
  $("footer").css("visibility","visible")
  $("#about_text").css("visibility","hidden")
  $("#name").css("visibility","hidden")
  $("#list").css("visibility","hidden")
});


})

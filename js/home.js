$(document).ready(function(){

  $("#circle1").on("click", function(){
    $("a").css("visibility","visible")
    $("footer").css("visibility","hidden")
    $("#about_text").css("visibility","hidden")

});

$("#triangle3").on("click", function(){
  $("#about_text").css("visibility","visible")
  $("footer").css("visibility","hidden")
  $("a").css("visibility","hidden")
});

$("#square2").on("click", function(){
  $("footer").css("visibility","visible")
  $("#about_text").css("visibility","hidden")
  $("a").css("visibility","hidden")
});


})

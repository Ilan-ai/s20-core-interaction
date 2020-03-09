$(document).ready(function(){

  $("#courage").on("mouseover", function(){
    $("#fear").css("opacity","0")
});

$("#courage").on("mouseout", function(){
  $("#fear").css("opacity","1")

});

  })

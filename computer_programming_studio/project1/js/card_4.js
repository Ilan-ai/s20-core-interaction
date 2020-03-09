$(document).ready(function(){

  $("#courage").on("mousedown", function(){
    $("#fear").css("animation","back1 0s linear")
    $("#fear").css("animation","front1 8s linear")
    $("#fear").css("font-size","20px")
    $("#courage").css("color","black")
    $("body").css("animation","back 0s linear")
    $("body").css("animation","front 3s linear")
    $("body").css("background-color","white")
});

  $("#courage").on("mouseup", function(){
    $("#fear").css("animation","front1 0s linear")
    $("#fear").css("animation","back1 7s linear")
    $("#fear").css("font-size","400px")
    $("#courage").css("color","white")
    $("body").css("animation","front 0s linear")
    $("body").css("animation","back 3s linear")
    $("body").css("background-color","black")
});


})

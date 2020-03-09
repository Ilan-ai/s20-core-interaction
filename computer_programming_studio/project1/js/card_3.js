$(document).ready(function(){

  $("#courage").on("click", function(){
    $("#courage").css("animation","glow 0s ease-in-out infinite alternate")
    $("body").css("cursor","none")
    $(".light").css("visibility","visible")




    });

    const cursor = document.querySelector('.light');
     document.addEventListener('mousemove', function(e) {
       console.log(e.pageY)

          cursor.style.top = e.pageY - 10 + "px";
          cursor.style.left = e.pageX - 10 + "px";
         //cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX-10)+"px;")
    })



})

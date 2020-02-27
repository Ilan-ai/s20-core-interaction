var s1 = document.getElementById("square1");

setInterval(function(){

for (var i = 0; i < 5; i++) {

  if( i < 5){


  var color1 = Math.floor(Math.random()*16777215).toString(16);
  var color2 = Math.floor(Math.random()*16777215).toString(16);
// i need two seperate colors generated and then plug those colors into the "Mymodule" vairable :(




    var wholeset= document.getElementById("square");

    var firstVariable = 'replace me with some css';

    var myModule = `

        <div id="square1"
        style="background-image: linear-gradient(to right, #${color1}, #${color2});">
        </div>
        <div id="square2"
        style="background-image: linear-gradient(to right, #${color1}, #${color2});">
        </div>
        <div id="square3"
        style="background-image: linear-gradient(to right, #${color1}, #${color2});">
        </div>

    `;

    wholeset.insertAdjacentHTML('beforeend', myModule);

    i= i + 1
    console.log(i)
}
}
}, 1000)

var s1 = document.getElementById("square1");

setInterval(function(){

for (var i = 0; i < 50; i++) {

    var a1 = Math.round(Math.random()*255); // 144.77989
    var a2 = Math.round(Math.random()*255);

    var firstVariable = 'replace me with some css';

    var myModule = `

        <div id="square1"
        style="background-image: linear-gradient(to right ${a1}, ${a2});">
        </div>

    `;

    myRootDiv.insertAdjacentHTML('beforeend', myModule)


}
}, 1000)

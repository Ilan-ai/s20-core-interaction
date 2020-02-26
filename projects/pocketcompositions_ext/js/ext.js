var myRootDiv = document.getElementById("container");


for (var i = 0; i < 50; i++) {

    var r = Math.ceil(Math.random()*255); // 144.77989
    var g = Math.round(Math.random()*255);
    var b = Math.floor(Math.random()*255);

    var firstVariable = 'replace me wiht some css';

    var myModule = `

        <div class="myClass" style="background-color: rgb(${r}, ${g}, ${b});">
            <div class="diagonalLine" style="${ firstVariable }"></div>
            <div class="oval" style="${ firstVariable }"></div>
        </div>

    `;

    myRootDiv.insertAdjacentHTML('beforeend', myModule)


}

var plant1 = document.getElementById("leaf1");
console.log(plant1)

var plant2 = document.getElementById("leaf2");
console.log(plant2)

var plant3 = document.getElementById("leaf3");
console.log(plant3)

var plantb1 = document.getElementById("leafb1");
console.log(plantb1)

var plantb2 = document.getElementById("leafb2");
console.log(plantb2)

setTimeout(function(){

  plant1.style.marginTop = "270px";
  plant1.style.marginLeft = "-50px";
  plant1.style.transform = "rotate(90deg)";
  plant1.style.opacity = "1";

}, 6000);

setTimeout(function(){

  plant2.style.marginTop = "345px";
  plant2.style.marginLeft = "-120px";
  plant2.style.transform = "rotate(0deg)";
  plant2.style.opacity = "1";

}, 6000);

setTimeout(function(){

  plant3.style.marginTop = "290px";
  plant3.style.marginLeft = "-100px";

}, 3000);

setTimeout(function(){

  plantb1.style.marginTop = "280px";
  plantb1.style.marginLeft = "-75px";
  plantb1.style.transform = "rotate(62.5deg)";
  plantb1.style.opacity = "1";

}, 14000);

setTimeout(function(){

  plantb2.style.marginTop = "310px";
  plantb2.style.marginLeft = "-120px";
  plantb2.style.transform = "rotate(27.5deg)";
  plantb2.style.opacity = "1";

}, 14000);

setTimeout(function(){

  petal1.style.width = "70px";
  petal1.style.height = "140px";
  petal1.style.borderBottomRightRadius = "140px";
  petal1.style.borderTopRightRadius = "140px";
  petal1.style.marginTop = "100px";
  petal1.style.marginLeft = "25px";
  petal1.style.opacity = "1";

  petal2.style.height = "140px";
  petal2.style.width = "70px";
  petal2.style.borderBottomLeftRadius = "140px";
  petal2.style.borderTopLeftRadius = "140px";
  petal2.style.marginTop = "100px";
  petal2.style.marginLeft = "-40px";
  petal2.style.opacity = "1";

  mainstem.style.height = "200px";
  mainstem.style.width = "7px";
  mainstem.style.marginTop = "200px";
  mainstem.style.marginLeft = "25px";
  mainstem.style.opacity = "1";

},20000);


setTimeout(function(){

  petal1.style.opacity = "0";

}, 27000);

setTimeout(function(){

  petal2.style.opacity = "0";

}, 27000);

setTimeout(function(){

  petals1.style.transform = "rotate(60deg)";
  petals1.style.opacity = "1";
  petals1.style.marginTop = "120px";

}, 27000);

setTimeout(function(){

  petals2.style.transform = "rotate(-60deg)";
  petals2.style.opacity = "1";
  petals2.style.marginTop = "120px";

}, 27000);

setTimeout(function(){

stem1.style.opacity = "1";
stem2.style.opacity = "1";
bud1.style.opacity = "1";
bud2.style.opacity = "1";

}, 27000);

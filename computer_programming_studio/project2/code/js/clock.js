//if 7 am
//var number take the hour and then gets the document id necassary for that hour

//var number= myDate.getHours()

var allnumbers = document.getElementsByClassName("numbers")

setInterval(function (){
//var shadow6am= n6am.style.textShadow;
//var shadow7am= n7am.style.textShadow;
/*var shadow1pm= n7am.style.textShadow;
var shadow1pm= n8am.style.textShadow;*/
var shadow9am= n9am.style.textShadow;
var shadow10am= n10am.style.textShadow;
var shadow11am= n11am.style.textShadow;
var shadow12pm= n12pm.style.textShadow;
/*var shadow1pm= n1pm.style.textShadow;
var shadow2pm= n2pm.style.textShadow;
var shadow3pm= n3pm.style.textShadow;
var shadow4pm= n4pm.style.textShadow;*/
var shadow5pm= n5pm.style.textShadow;
var shadow6pm= n6pm.style.textShadow;
var shadow6pm= n7pm.style.textShadow;
var myDate= new Date;


    var currentSecond = myDate.getSeconds()
    var currentMinute = myDate.getMinutes()
    var currentHour = myDate.getHours()

    //to accelerate move all values above down by one ex) seconds=miliseconds

    console.log(currentHour);
    console.log(currentSecond);


    /*if(currentHour = 6){

      n6am.style.opacity= "1";

      for (var i = 0; i < currentSecond; i++) {
        if(i === currentSecond - 1){
          shadown6am = shadow6am + `${x}px ${y}px black`

        }else{
          shadown6am = shadow6am + `${x}px ${y}px black, `
        }

        var y=y+1;
        var x=y*(-2);
      }
      n6am.style.textShadow = shadow6am;
    }

    if(currentHour = 7){

      n6am.style.opacity= "0";
      n7am.style.opacity= "1";

      for (var i = 0; i < currentSecond; i++) {
        if(i === currentSecond - 1){
          shadow7am = shadow7am + `${x}px ${y}px black`

        }else{
          shadow7am = shadow7am + `${x}px ${y}px black, `
        }

        var y=y+1;
        var x=y*(-2);
      }
      n7am.style.textShadow = shadow7am;
    }

    if(currentHour = 8){

      n7am.style.opacity= "0";
      n8am.style.opacity= "1";

      for (var i = 0; i < currentSecond; i++) {
        if(i === currentSecond - 1){
          shadow = shadow + `${x}px ${y}px black`

        }else{
          shadow = shadow + `${x}px ${y}px black, `
        }

        var y=y+1;
        var x=y*(-2);
      }
      n8am.style.textShadow = shadow;
    }*/

    if(currentHour == 9){

      var y= 0;
      var x= 0;

      var a= -2;
      var b= 1;

      var r= -4;
      var s= 2;

      n9am.style.opacity= "1";
      shadow9am= "";

      for (var i = 0; i < currentMinute; i++) {
        if(i === currentMinute - 1){
          shadow9am = shadow9am + `${x}px ${y}px lightgrey`

        }else{
          shadow9am = shadow9am + `${x}px ${y}px lightgrey, ${a}px ${b}px lightgrey, ${r}px ${s}px lightgrey, `
        }

        var y=y+3;
        var x=y*(-2);

        var b=b+3;
        var a=b*(-2);

        var s=s+3;
        var r=s*(-2);
      }

      n9am.style.textShadow = shadow9am;
      console.log(shadow9am)

    }

    if(currentHour == 10){

      var y= 0;
      var x= 0;

      var a= -2;
      var b= 1;

      var r= -4;
      var s= 2;

      n10am.style.opacity= "1";
      shadow10am= "";

      for (var i = 0; i < currentMinute; i++) {
        if(i === currentMinute - 1){
          shadow10am = shadow10am + `${x}px ${y}px lightgrey`

        }else{
          shadow10am = shadow10am + `${x}px ${y}px lightgrey, ${a}px ${b}px lightgrey, ${r}px ${s}px lightgrey, `
        }

        var y=y+3;
        var x=y*(-2);

        var b=b+3;
        var a=b*(-2);

        var s=s+3;
        var r=s*(-2);
      }

      n10am.style.textShadow = shadow10am;
      console.log(shadow10am)

    }

    if(currentHour == 11){

      var y= 0;
      var x= 0;

      var a= -2;
      var b= 1;

      var r= -4;
      var s= 2;

      n11am.style.opacity= "1";
      shadow11am= "";

      for (var i = 0; i < currentMinute; i++) {
        if(i === currentMinute - 1){
          shadow11am = shadow11am + `${x}px ${y}px lightgrey`

        }else{
          shadow11am = shadow11am + `${x}px ${y}px lightgrey, ${a}px ${b}px lightgrey, ${r}px ${s}px lightgrey, `
        }

        var y=y+3;
        var x=y*(-2);

        var b=b+3;
        var a=b*(-2);

        var s=s+3;
        var r=s*(-2);
      }

      n11am.style.textShadow = shadow11am;
      console.log(shadow11am)

    }

    if(currentHour == 12){

      n11am.style.opacity= "0";
      n12pm.style.opacity= "1";
      shadow12pm= "";

      for (var i = 0; i < currentSecond; i++) {
        if(i === currentSecond - 1){
          shadow12pm = shadow12pm + `${x}px ${y}px black`

        }else{
          shadow12pm = shadow12pm + `${x}px ${y}px black, `
        }

        var y=y+1;
        var x=y*(-2);
      }
      n12pm.style.textShadow = shadow12pm;
    }

    /*if(currentHour == 13){

      var y= 0;
      var x= 0;

      n12pm.style.opacity= "0";
      shadow12pm= ""
      n1pm.style.opacity= "1";
      shadow1pm= ""

      for (var i = 0; i < currentSecond; i++) {
        if(i === currentSecond - 1){
          shadow1pm = shadow1pm + `${x}px ${y}px black`

        }else{
          shadow1pm = shadow1pm + `${x}px ${y}px black, `
        }

        var y=y+1;
        var x=y*(-2);
      }
      n1pm.style.textShadow = shadow1pm;
    }

    if(currentHour == 14){

      var y= 0;
      var x= 0;

      n1pm.style.opacity= "0";
      shadow1pm= ""
      n2pm.style.opacity= "1";
      shadow2pm= ""

      for (var i = 0; i < currentSecond; i++) {
        if(i === currentSecond - 1){
          shadow2pm = shadow2pm + `${x}px ${y}px black`

        }else{
          shadow2pm = shadow2pm + `${x}px ${y}px black, `
        }

        var y=y+1;
        var x=y*(-2);
      }
      n2pm.style.textShadow = shadow2pm;
      console.log(n2pm);
      console.log(shadow2pm);
    }

    if(currentHour == 15){

      var y= 0;
      var x= 0;

      var a= 2;
      var b= 1;

      n2pm.style.opacity= "0";
      shadow2pm= ""
      n3pm.style.opacity= "1";
      shadow3pm= ""

      for (var i = 0; i < currentMinute; i++) {
        if(i === currentMinute - 1){
          shadow3pm = shadow3pm + `${x}px ${y}px black`

        }else{
          shadow3pm = shadow3pm + `${x}px ${y}px black, ${a}px ${b}px black, `
        }

        var y=y+2;
        var x=y*(2);

        var b=b+2;
        var a=b*(2);
      }
      n3pm.style.textShadow = shadow3pm;
    }

    if(currentHour == 16){

      var y= 0;
      var x= 0;
      //the y and x will change to the last coordinates of the textshadow seen at the end of 3pm (15 )

      n3pm.style.opacity= "0";
      shadow3pm= ""
      n4pm.style.opacity= "1";
      shadow4pm= ""

      for (var i = 0; i < currentSecond; i++) {
        if(i === currentSecond - 1){
          shadow4pm = shadow4pm + `${x}px ${y}px black`

        }else{
          shadow4pm = shadow4pm + `${x}px ${y}px black, `
        }

        var y=y+1;
        var x=y*(2);

      }
      n4pm.style.textShadow = shadow4pm;
    }*/
    /*if(currentHour == 16){

      var y= 0;
      var x= 0;

      var a= 2;
      var b= 1;

      var r= 4;
      var s= 2;
      //the y and x will change to the last coordinates of the textshadow seen at the end of 3pm (15 )

      n3pm.style.opacity= "0";
      shadow3pm= ""
      n4pm.style.opacity= "1";
      shadow4pm= ""

      for (var i = 0; i < currentSecond; i++) {
        if(i === currentSecond - 1){
          shadow4pm = shadow3pm + shadow4pm + `${x}px ${y}px black`

        }else{
          shadow4pm = shadow3pm + shadow4pm + `${x}px ${y}px black, ${a}px ${b}px black, ${r}px ${s}px black, `
        }

        var y=y+3;
        var x=y*(2);

        var b=b+3;
        var a=b*(2);

        var s=s+3;
        var r=s*(2);
      }
      n4pm.style.textShadow = shadow4pm;
    }*/

    /*if(currentHour == 17){

      var y= 0;
      var x= 0;

      n4pm.style.opacity= "0";
      shadow4pm= ""
      n5pm.style.opacity= "1";
      shadow5pm= ""

      for (var i = 0; i < currentSecond; i++) {
        if(i === currentSecond - 1){
          shadow5pm = shadow5pm + `${x}px ${y}px black`

        }else{
          shadow5pm = shadow5pm + `${x}px ${y}px black, `
        }

        var y=y+1;
        var x=y*(-2);
      }
      n5pm.style.textShadow = shadow5pm;

    }

    if(currentHour == 18){

      var y= 0;
      var x= 0;

      n5pm.style.opacity= "0";
      shadow5pm= ""
      n6pm.style.opacity= "1";
      shadow6pm= ""

      for (var i = 0; i < currentSecond; i++) {
        if(i === currentSecond - 1){
          shadow6pm = shadow6pm + `${x}px ${y}px black`

        }else{
          shadow6pm = shadow6pm + `${x}px ${y}px black, `
        }

        var y=y+1;
        var x=y*(-2);
      }

      n6pm.style.textShadow = shadow6pm;

      console.log(n6pm);
      console.log(shadow6pm);
    }

    if(currentHour == 19){

      var y= 0;
      var x= 0;

      n6pm.style.opacity= "0";
      shadow7pm= ""
      n7pm.style.opacity= "1";
      shadow7pm= ""

      for (var i = 0; i < currentSecond; i++) {
        if(i === currentSecond - 1){
          shadow7pm = shadow7pm + `${x}px ${y}px black`

        }else{
          shadow7pm = shadow7pm + `${x}px ${y}px black, `
        }

        var y=y+1;
        var x=y*(-2);
      }

      n7pm.style.textShadow = shadow7pm;
    }*/

  }, 1000)







    //console.log(shadow);

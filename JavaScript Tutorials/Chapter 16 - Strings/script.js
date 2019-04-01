// String 
var carName1 = "Civic Prosmatec";
var carName2 = "Honda Accord";
document.getElementById("demo").innerHTML = carName1 + "<br>" + carName2;
// String 
var details1 = "It's Alright";
var details2 = "His Name Is 'Bilal'";
document.getElementById("demo1").innerHTML = details1 + "<br>" + details2;
// String Length
var text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo2").innerHTML = text.length;
// Escape Character ("\ Or Forward Slash")
var a = "We Are So Called \"Vikings\" From The North";
document.getElementById("demo3").innerHTML = a;
document.getElementById("demo4").innerHTML = "Hello \
Bilal.";
// String Concat
document.getElementById("demo5").innerHTML = "Hello" + " " + "Bilal";
// String & Object Comparison
var x = "Syed Bilal";
var y = new String("Syed Bilal");
document.getElementById("demo6").innerHTML = typeof x + "<br>" + typeof y;
// String & Object Comparison For Equal Value
document.getElementById("demo7").innerHTML = (x == y);
// String & Object Comparison For Equal Value & Equal Type
document.getElementById("demo8").innerHTML = (x === y);
// String & Object Comparison
var a = new String("Syed Bilal Hussain");
var b = new String("Syed Bilal Hussain");
document.getElementById("demo9").innerHTML = (a == b);
document.getElementById("demo10").innerHTML = (a === b);
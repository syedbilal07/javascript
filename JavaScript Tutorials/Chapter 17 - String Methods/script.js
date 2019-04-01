// String Length Method
var text= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo").innerHTML = text.length;
// Index Method
function indexOfFunction()
{
var str = document.getElementById("p1").innerHTML;
var pos = str.indexOf("locate");
var str = document.getElementById("demo1").innerHTML = pos;
}
// LastIndex Method
function lastindexOfFunction()
{
var string = document.getElementById("p2").innerHTML;
var position = string.lastIndexOf("locate");
var string = document.getElementById("demo2").innerHTML = position;
}
// Search Method
function searchFunction()
{
	var search = document.getElementById("p3").innerHTML;
	var index = search.search("locate");
	var search = document.getElementById("demo3").innerHTML = index;
}
// Slice Method
var slice = "Apple, Banana, Kiwi";
document.getElementById("demo4").innerHTML = slice.slice(7,13);
var slicing = "Apple, Banana, Kiwi";
document.getElementById("demo5").innerHTML = slicing.slice(-12,-6);
// Substring Method
var sub = "Apple, Banana, Kiwi";
document.getElementById("demo6").innerHTML = sub.substring(7,13);
// Substr Method
var substr = "Apple, Banana, Kiwi";
document.getElementById("demo7").innerHTML = substr.substr(7,6);
// Replace Method
function replace()
{
	var replace = document.getElementById("demo8").innerHTML;
	var change = replace.replace("Microsoft","W3Schools");
	document.getElementById("demo8").innerHTML = change;
}
// ReplaceAll Method
function replaceAll()
{
	var replaceAll = document.getElementById("demo9").innerHTML;
	var changeAll = replaceAll.replace(/Microsoft/g,"W3Schools");
	document.getElementById("demo9").innerHTML = changeAll;
}
// Uppercase Method
function uppercase()
{
	var text = document.getElementById("demo10").innerHTML;
	var uppercase = text.toUpperCase();
	document.getElementById("demo10").innerHTML = uppercase;
}
// Lowercase Method
function lowercase()
{
	var text1 = document.getElementById("demo11").innerHTML;
	document.getElementById("demo11").innerHTML = text1.toLowerCase();
}
var text2 = "Hello";
var text3 = "Bilal";
document.getElementById("demo12").innerHTML = text2.concat(" ",text3);
// CharAt Method
var character = "Hello World";
document.getElementById("demo13").innerHTML = character.charAt(0);
// CharCodeAt Method
var unicode = "Hello World";
document.getElementById("demo14").innerHTML = unicode.charCodeAt(0);
// Split Method
function split()
{
var txt = "a,b,c,d,e";
var arr = txt.split(",");
document.getElementById("demo15").innerHTML = arr[1];
}
function displayArray()
{
	var cars = ["Civic","City","Accord","Lamborghini"];
	document.getElementById("displayArray").innerHTML = cars;
}
function createArray()
{
	var cars = ["Civic","City","Accord","Lamborghini"];
	document.getElementById("createArray").innerHTML = cars[0];
}
function createArrayMultipleLines()
{
	var cars = ["Civic",
				"City",
				"Accord",
				"Lamborghini"];
	document.getElementById("createArrayMultipleLines").innerHTML = cars[3];
}
function createArrayUsingNew()
{
	var cars = new Array("Civic","City","Accord","Lamborghini");
	document.getElementById("createArrayUsingNew").innerHTML = cars[1];
}
function accessingArrays()
{
	var cars = ["Civic","City","Accord","Lamborghini"];
	document.getElementById("accessingArrays").innerHTML = cars;
}
function accessingArraysUsingNumbers()
{
	var person = ["Syed","Bilal","23"]
	document.getElementById("accessingArraysUsingNumbers").innerHTML = person[1];
}
function accessingObjectsUsingNames()
{
	var person = {firstName:"Syed",
				  lastName:"Bilal",
			      Age:"23"}
	document.getElementById("accessingObjectsUsingNames").innerHTML = person["lastName"];
}
function arrayLength()
{
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("arrayLength").innerHTML = fruits.length;
}
// Array Push Method
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("arrayPushMethod").innerHTML = fruits;
function arrayPushMethod()
{
	fruits.push("Lemon");
	document.getElementById("arrayPushMethod").innerHTML = fruits;
}
// Array Length Method
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("arrayPushMethod").innerHTML = fruits;
function addArrayUsingLength()
{
	fruits[fruits.length] = "Lemon";
	document.getElementById("addArrayUsingLength").innerHTML = fruits;
}
// Array Holes Method
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("addingArrayHoles").innerHTML = fruits;
function addingArrayHoles()
{
	fruits[10] = "Lemon";
	document.getElementById("addingArrayHoles").innerHTML = fruits[8];
}
function loopingArrays()
{
	var fruits, length, i, text;
	fruits = ["Banana", "Orange", "Apple", "Mango"];
	length = fruits.length;
	text = "<ul>";
	for(i=0;i<length;i++)
	{
		text += "<li>" + fruits[i] + "</li>";
	}
	text += "</ul>"
	document.getElementById("loopingArrays").innerHTML = text;
}
function associativeArray()
{
	var person = [];
	person[0] = "Syed"
	person[1] = "Bilal"
	person[2] = "23"
	document.getElementById("associativeArray").innerHTML = person[1] + " " + person.length;
}
function errorInArray()
{
	var person = [];
	person["firstName"] = "Syed"
	person["lastName"] = "Bilal"
	person["age"] = "23"
	document.getElementById("associativeArray").innerHTML = person[1] + " " + person.length;
	document.getElementById("errorInArray").innerHTML = person[1] + " " + person.length;
}
function twoArrays()
{
	var points = [40, 100, 1, 5, 25, 10];
	var points = new Array(40, 100, 1, 5, 25, 10);
	document.getElementById("twoArrays").innerHTML = points[0];
}
function newArray()
{
	var points = new Array(40,100);
	document.getElementById("newArray").innerHTML = points[0];
}
function newArrayRemove()
{
	var points = new Array(40);
	document.getElementById("newArrayRemove").innerHTML = points[0]
}
function typeofArray()
{
	var points = new Array(40);
	document.getElementById("typeofArray").innerHTML = typeof points;
}
function isArray1()
{
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("isArray1").innerHTML = Array.isArray(fruits);
}
// is Array Function
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("isArray").innerHTML = isArray(fruits);
function isArray(x)
{
	return x.constructor.toString().indexOf("Array") > -1;
}
function instanceOf()
{
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("instanceOf").innerHTML = fruits instanceof Array;
}
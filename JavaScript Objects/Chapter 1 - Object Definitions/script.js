function javascriptVariables()
{
	var person = "Syed Bilal";
	document.getElementById("javascriptVariables").innerHTML = person;
}
function objectsAreVariables()
{
	var person = {firstName:"Syed", lastName:"Bilal", age:23};
	document.getElementById("objectsAreVariables").innerHTML = person.firstName + " " + person.lastName ; 
}
function objectLiteral()
{
	var person = {firstName:"Syed", lastName:"Bilal", age:23};
	document.getElementById("objectLiteral").innerHTML = person.firstName + " " + person.lastName + " " + "Is" + " " + person.age + " " + "Years Old";  
}
function objectLiteralCanSpanMultipleLines()
{
	var person = {
					firstName:"Syed",
					lastName:"Bilal",
					age:23
				 };
	document.getElementById("objectLiteralCanSpanMultipleLines").innerHTML = person.firstName + " " + person.lastName + " " + "Is" + " " + person.age + " " + "Years Old";  
}
function usingNew()
{
	var person = new Object();
	person.firstName = "Syed";
	person.lastName = "Bilal";
	person.age = 23;
	document.getElementById("usingNew").innerHTML = person.firstName + " " + person.lastName + " " + "Is" + " " + person.age + " " + "Years Old";  
}
function objectConstructor(first,last,age,eye)
{
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyeColor = eye;
	
}
// Object Constructor
	var myFather = new objectConstructor("Syed","Zakir",69,"Brown");
	var myMother = new objectConstructor("Qamar","Sultana",61,"Black");
	document.getElementById("objectConstructor").innerHTML = "My Father Is" + " " + myFather.age + ". My Mother Is" + " " + myMother.age;

function buildInConstructor()
{
	var x1 = new Object();
	var x2 = new String();
	var x3 = new Boolean();
	var x4 = new RegExp();
	var x5 = new Array();
	var x6 = new Number();
	var x7 = new Date();
	var x8 = new Function();
	document.getElementById("buildInConstructor").innerHTML = 
	"x1: " + typeof x1 + "<br />" +
	"x2: " + typeof x2 + "<br />" +
	"x3: " + typeof x3 + "<br />" + 
	"x4: " + typeof x4 + "<br />" +
	"x5: " + typeof x5 + "<br />" +
	"x6: " + typeof x6 + "<br />" +
	"x7: " + typeof x7 + "<br />" +
	"x8: " + typeof x8;
}
function datatypes()
{
	var x1 = {};
	var x2 = "";
	var x3 = false;
	var x4 = /()/;
	var x5 = [];
	var x6 = 0;
	var x7 = function(){};
	document.getElementById("datatypes").innerHTML = 
	"x1: " + typeof x1 + "<br />" +
	"x2: " + typeof x2 + "<br />" +
	"x3: " + typeof x3 + "<br />" + 
	"x4: " + typeof x4 + "<br />" +
	"x5: " + typeof x5 + "<br />" +
	"x6: " + typeof x6 + "<br />" +
	"x7: " + typeof x7 + "<br />";
}
function objectsAreMutable()
{
	var person = {firstName:"Syed", lastName:"Bilal", age:19};
	var x = person;
	x.age = 23;
	document.getElementById("objectsAreMutable").innerHTML = 
	person.lastName + " " + "Is" + " " + person.age + " " + "Years Old";  
}
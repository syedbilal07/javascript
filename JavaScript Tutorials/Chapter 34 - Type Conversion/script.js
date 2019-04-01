function typeOfOperator()
{
	document.getElementById("typeOfOperator").innerHTML =
	typeof "John" + "<br />" +
	typeof 3.14 + "<br />" +
	typeof NaN + "<br />" +
	typeof undefined + "<br />" +
	typeof null + "<br />" +
	typeof false + "<br />" +
	typeof [1,2,3,4] + "<br />" +
	typeof new Date();
}
function constructorProperty()
{
	document.getElementById("constructorProperty").innerHTML = 
	"John".constructor + "<br />" +
	(3.14).constructor + "<br />" +
	false.constructor + "<br />" +
	[1,2,3,4].constructor + "<br />" +
	{firstName:"Syed", lastName:"Bilal"}.constructor + "<br />" +
	new Date().constructor + "<br />" +
	function() {}.constructor;
}
// Constructor Property For Array
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("isArray").innerHTML = isArray(fruits);
function isArray(x)
{
	return x.constructor.toString().indexOf("Array") > -1;
}
// Constructor Property For Date
	var date = new Date();
	document.getElementById("isDate").innerHTML = isDate(date);
function isDate(date)
{
	return date.constructor.toString().indexOf("Date") > -1;
}
function stringMethod()
{
	var x = 123;
	document.getElementById("stringMethod").innerHTML = 
	String(x) + "<br />" +
	String(123) + "<br />" +
	String(100 + 23) + "<br />";
}
function toStringMethod()
{
	var x = 123;
	document.getElementById("toStringMethod").innerHTML =
	x.toString() + "<br />" +
	"123".toString() + "<br />" +
	(100 + 23).toString() + "<br />";
}
function unaryOperator()
{
	var x = "5";
	var y = + x;
	document.getElementById("unaryOperator").innerHTML =
	typeof x + "<br />" + typeof y;
}
function unaryOperatorNan()
{
	var x = "John";
	var y = + x;
	document.getElementById("unaryOperatorNan").innerHTML = 
	typeof y + "<br />" + y;
}
function automaticType()
{
	document.getElementById("automaticType").innerHTML = 
	(5 + null) + "<br />" +
	("5" + null) + "<br />" +
	("5" + 2) + "<br />" +
	("5" - 2) + "<br />" +
	("5" * 2) + "<br />" +
	("5" + "2");
}
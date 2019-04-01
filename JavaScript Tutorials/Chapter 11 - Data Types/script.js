// Adding Number & String
var x = 16 + "Volvo"
document.getElementById("demo").innerHTML = x;
// Adding Number & String
var y = "Volvo" + 16;
document.getElementById("demo1").innerHTML = y;
// Adding Number & String
var a = 16 + 4 + "Volvo";
document.getElementById("demo2").innerHTML = a;
// Adding Number & String
var b = "Volvo" + 16 + 4;
document.getElementById("demo3").innerHTML = b;
// String Creation
var carName1 = "Civic Prosmatec";
var carName2 = "City";
var person = "Syed Bilal";
var details = "Is Alright";
document.getElementById("demo4").innerHTML = carName1 + "<br>" + carName2 + "<br>" + person + "<br>" + details;
// Array Creation
var cars = ["Mehran","Corolla","Accord"];
document.getElementById("demo5").innerHTML = cars[0];
// Object Creation
var person = 
{
	firstName: "Syed",
	lastName: "Bilal",
	age: "23",
	eyeColor: "Black"
};
document.getElementById("demo6").innerHTML = person.lastName + " is " + person.age + " years old.";
// The typeof Operator
document.getElementById("demo7").innerHTML = 
typeof "Syed Bilal" + "<br>" +
typeof 3.14 + "<br>" +
typeof false + "<br>" +
typeof [1,2,3,4] + "<br>" +
typeof {name:"Bilal",age:23};
// The typeof Operator
var person;
document.getElementById("demo8").innerHTML = person + "<br>" + typeof person;
// The typeof Operator
var PERSON = {firstName:"Asif",lastName:"Hussain",age:28};
PERSON = undefined;
document.getElementById("demo9").innerHTML = person + "<br>" + typeof person;
// The typeof Operator
var car = "";
document.getElementById("demo10").innerHTML = "The Value Is: " + car + "<br>" + "The Type Is: " + typeof car;
// The typeof Operator
var people = {firstName:"Atif",lastName:"Hussain",age:33};
people = null;
document.getElementById("demo11").innerHTML = people + "<br>" + typeof people;
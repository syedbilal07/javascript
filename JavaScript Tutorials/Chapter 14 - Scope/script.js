// Local Variable
function myFunction()
{
	var carName = "Volvo";
}
document.getElementById("demo").innerHTML = "The type of carName is " + typeof carName;

// Global Variable

var car= "Civic";
myfunction();
function myfunction()
{
	document.getElementById("demo1").innerHTML = "I Can Display " + car;
} 

// Automatically Global
function carName()
{
	carName = "Accord";
}
carName();
document.getElementById("demo2").innerHTML = "I Can Display " + carName;
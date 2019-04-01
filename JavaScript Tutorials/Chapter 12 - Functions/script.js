// Function For Multiplication
function myFunction(a,b)
{
	return a * b;
}
document.getElementById("demo").innerHTML = myFunction(4,3);
// Function To Celsius
function toCelsius(f)
{
	return (5/9) * (f-32);
}
document.getElementById("demo1").innerHTML = toCelsius(77);

var x = "The Temperature Is " + toCelsius(77) + " Celsius";
document.getElementById("demo2").innerHTML = x;
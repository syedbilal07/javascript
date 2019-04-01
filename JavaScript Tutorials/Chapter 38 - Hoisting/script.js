function hoistingMethod()
{
	x = 5;
	document.getElementById("hoistingMethod").innerHTML = x;
	var x;
}
function hoistingMethod1()
{
	var x;
	x = 5;
	document.getElementById("hoistingMethod1").innerHTML = x;
}
function noHoistingMethod()
{
	var x = 5;
	var y = 7;
	document.getElementById("noHoistingMethod").innerHTML = x + " " + y;
}
function noHoistingMethod1()
{
	var x = 5;
	document.getElementById("noHoistingMethod1").innerHTML = "x Is " + x + " " + "y Is " + y;
	var y = 7;
}
function hoistingMethod2()
{
	var x = 5;
	var y;
	document.getElementById("hoistingMethod2").innerHTML = "x Is " + x + " " + "y Is " + y;
	y = 7;
}
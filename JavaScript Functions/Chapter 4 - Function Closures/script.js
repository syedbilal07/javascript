function functionCanAccessVariablesInsideAFunction()
{
	var a = 4;
	document.getElementById("functionCanAccessVariablesInsideAFunction").innerHTML = a * a;
}
// function Can Access Variables Outside The Function
	var a = 4;
function functionCanAccessVariablesOutsideTheFunction()
{
	document.getElementById("functionCanAccessVariablesOutsideTheFunction").innerHTML = a * a;
}
// Counter Dilemma
	var counter = 0;
function add1()
{
	return counter += 1;
}
function counterDilemma1()
{
	document.getElementById("counterDilemma1").innerHTML = add1();
}
// Counter Dilemma
function add2()
{
	var counter = 0;
	return counter += 1;
}
function counterDilemma2()
{
	document.getElementById("counterDilemma2").innerHTML = add2();
}
// Counter Dilemma Using Inner Function
function add3()
{
	var counter = 0;
	function plus()
	{
		counter += 1;
	}
	plus();
	return counter;
}
function counterDilemmaUsingInnerFunction()
{
	document.getElementById("counterDilemmaUsingInnerFunction").innerHTML = add3();
}
// Javascript Closure
var add4 = (function ()
{
	var counter = 0;
	return function() {return counter += 1};
})();
function javascriptClosures()
{
	document.getElementById("javascriptClosures").innerHTML = add4();
}

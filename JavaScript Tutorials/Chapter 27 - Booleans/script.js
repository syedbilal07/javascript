function booleanFunction()
{
	document.getElementById("booleanFunction").innerHTML = Boolean(10 > 9);
}
// Everything With Real Value Is True
	var b1 = Boolean(100);
	var b2 = Boolean(3.14);
	var b3 = Boolean(-15);
	var b4 = Boolean("Hello");
	var b5 = Boolean("False");
	var b6 = Boolean(1 + 7 + 3.14);
function withrealValue()
{
	document.getElementById("withrealValue").innerHTML = 
	"100 is " + b1 + "<br>" +
	"3.14 is " + b2 + "<br>" +
	"-15 is " + b3 + "<br>" +
	"Any (not empty) string is " + b4 + "<br>" +
	"Even the string 'false' is " + b5 + "<br>" +
	"Any expression (except zero) is " + b6;
}
function zeroValue()
{
	var x = 0;
	document.getElementById("zeroValue").innerHTML = Boolean(x);
}
function minusZeroValue()
{
	var x = -0;
	document.getElementById("minusZeroValue").innerHTML = Boolean(-0);
}
function emptyString()
{
	var x = "";
	document.getElementById("emptyString").innerHTML = Boolean(x);
}
function undefinedValue()
{
	var x;
	document.getElementById("undefinedValue").innerHTML = Boolean(x);
}
function nullValue()
{
	var x = null;
	document.getElementById("nullValue").innerHTML = Boolean(x);
}
function falseValue()
{
	var x = false;
	document.getElementById("falseValue").innerHTML = Boolean(x);
}
function nan()
{
	var x = NaN;
	document.getElementById("nan").innerHTML = Boolean(x);
}
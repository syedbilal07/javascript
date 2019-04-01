// Precision Function
function precisionFunction()
{
	var x = 999999999999999;
	var y = 9999999999999999;
	document.getElementById("precision").innerHTML = x + "<br>" + y;
}
// Precision Function
function floatingpointFunction()
{
	var a = 0.2 + 0.1;
	document.getElementById("floatingpoint").innerHTML = " 0.2 + 0.1 = " + a;
}
// Precision Function
function floatingsolutionFunction()
{
	var b = (0.2 * 10 + 0.1 * 10)/10;
	document.getElementById("floatingsolution").innerHTML = " 0.2 + 0.1 = " + b;
}
// Hexadecimal Function
function hexadecimalFunction()
{
	var c = 0xFF;
	document.getElementById("hexadecimal").innerHTML = "0xFF = " + c;
}
// toString Convert Function
function toStringFunction()
{
	var myNumber = 128;
	document.getElementById("toString").innerHTML = "128 = " + myNumber + " " + "Decimal" + ", " + myNumber.toString(16) + ", " + "Hexadecimal" + ", "
	+ myNumber.toString(8) + ", " + "Octal" + ", " + myNumber.toString(2) + ", " + "Binary";
}
// Infinity Function
function infinityFunction()
{
	var myNumber = 2;
	txt = "";
	while(myNumber != Infinity)
	{
		myNumber = myNumber * myNumber;
		txt = txt + myNumber + "<br>";
	}
	document.getElementById("infinity").innerHTML = txt
}
// Infinity Function
function infinityzeroFunction()
{
	var d = 2 / 0;
	var e = 2 / 0;
	document.getElementById("infinityzero").innerHTML = d + "<br>" + e;
}
// Typeof Infinity Function
function typeOfInfinityFunction()
{
	var f = 2 / 0;
	document.getElementById("typeOfInfinity").innerHTML = typeof f;
}
// NaN Function
function nan1Function()
{
	var g = 20 / "Apple";
	document.getElementById("nan1").innerHTML = g;
}
// NaN Function
function nan2Function()
{
	var h = 200 / "20";
	document.getElementById("nan2").innerHTML = h;
}
// NaN Function
function nan3Function()
{
	var i = 20 / "Apple";
	document.getElementById("nan3").innerHTML = isNaN(i);
}
// NaN Function
function nan4Function()
{
	var j = NaN;
	var k = 20;
	var l = j + k;
	document.getElementById("nan4").innerHTML = l;
}
// NaN Function
function nan5Function()
{
	var m = NaN;
	var n = "5";
	var o = m + n;
	document.getElementById("nan5").innerHTML = o;
}
// NaN Function
function nan6Function()
{
	var p = NaN;
	document.getElementById("nan6").innerHTML = typeof p;
}
// Numbers Are Object Function
function numbersobject1Function()
{
	var q = 12;
	var r = new Number(12);
	document.getElementById("numbersobject1").innerHTML = typeof q + "<br>" + typeof r
}
// Numbers Are Object Function
function numbersobject2Function()
{
	var s = 12;
	var t = new Number(12);
	document.getElementById("numbersobject2").innerHTML = (x == y);
}
// Numbers Are Object Function
function numbersobject3Function()
{
	var s = 12;
	var t = new Number(12);
	document.getElementById("numbersobject3").innerHTML = (x === y);
}
// Numbers Are Object Function
function numbersobject4Function()
{
	var u = new Number(500);
	var v = new Number(500);
	document.getElementById("numbersobject4").innerHTML = (u === v);
}
// toString Function
function StringConvert()
{
	var x = 123;
	document.getElementById("StringConvert").innerHTML = x.toString() + "<br>" + (123).toString() + "<br>" + (100 + 23).toString();
	
}
// toExponential Function
function toExponential()
{
	var x = 9.656;
	document.getElementById("toExponential").innerHTML = x.toExponential(2) + "<br>" + x.toExponential(4) + "<br>" + x.toExponential(6);
}
// toFixed Function
function toFixed()
{
	var x = 9.656;
	document.getElementById("toFixed").innerHTML = x.toFixed(2) + "<br>" + x.toFixed(4) + "<br>" + x.toFixed(6);
}
// toPrecision Function
function toPrecision()
{
	var x = 9.656;
	document.getElementById("toPrecision").innerHTML = x.toPrecision(2) + "<br>" + x.toPrecision(4) + "<br>" + x.toPrecision(6);
}
// valueOfNumber Function
function valueOfNumber()
{
	var x = 123;
	document.getElementById("valueOfNumber").innerHTML = x.valueOf() + "<br>" + (123).valueOf() + "<br>" + (100 + 23).valueOf();
}
// Number Function
function Numbers()
{
	document.getElementById("Numbers").innerHTML = Number(true) + "<br>" + Number(false) + "<br>" + Number(new Date()) + "<br>" + Number(10) + "<br>" + Number("10 6"); 
}
// parseInt Function
function parseIntNumber()
{
	document.getElementById("parseIntNumber").innerHTML = parseInt("10") + "<br>" + parseInt("10.33") + "<br>" + parseInt("10 6") + "<br>" + parseInt("10 years");
}
// parseFloat Function
function parseFloatNumber()
{
	document.getElementById("parseFloatNumber").innerHTML = parseFloat("10") + "<br>" + parseFloat("10.33") + "<br>" + parseFloat("10 6") + "<br>" + parseFloat("10 years");
}
// Number Function
function maxNumber()
{
	document.getElementById("maxNumber").innerHTML = Number.MAX_VALUE;
}
// Number Function
function maxNumber1()
{
	var x = 6;
	document.getElementById("maxNumber1").innerHTML = x.MAX_VALUE;
}


function displayDate()
{
	document.getElementById("displayDate").innerHTML = Date();
}
function newDate()
{
	var date = new Date();
	document.getElementById("newDate").innerHTML = date;
}
function newDateString()
{
	var date = new Date("22 January 2016 12:01:00 AM");
	document.getElementById("newDateString").innerHTML = date;
}
function newDateNumber()
{
	var date = new Date(86400000);
	document.getElementById("newDateNumber").innerHTML = date;
}
function newDateSevenNumbers()
{
	var date = new Date(99,0,22,12,03,56,0);
	document.getElementById("newDateSevenNumbers").innerHTML = date;
}
function newDateOmitParameters()
{
	var date = new Date(99,0,22);
	document.getElementById("newDateOmitParameters").innerHTML = date;
}
function dateToString()
{
	var date = new Date();
	document.getElementById("dateToString").innerHTML = date.toString();
}
function utcString()
{
	var date = new Date();
	document.getElementById("utcString").innerHTML = date.toUTCString();
}
function toDateString()
{
	var date = new Date();
	document.getElementById("toDateString").innerHTML = date.toDateString();
}

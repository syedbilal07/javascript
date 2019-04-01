function getTime()
{
	var date = new Date();
	document.getElementById("getTime").innerHTML = date.getTime();
}
function getFullYear()
{
	var date = new Date();
	document.getElementById("getFullYear").innerHTML = date.getFullYear();
}
function getDay()
{
	var date = new Date();
	document.getElementById("getDay").innerHTML = date.getDay();
}
function getDayUsingArray()
{
	var date = new Date();
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	document.getElementById("getDayUsingArray").innerHTML = days[date.getDay()];
}
function setFullYear()
{
	var date = new Date();
	date.setFullYear(2016,07,07);
	document.getElementById("setFullYear").innerHTML = date;
}
function setDate()
{
	var date = new Date();
	date.setDate(21);
	document.getElementById("setDate").innerHTML = date;
}
function setDate1()
{
	var date = new Date();
	date.setDate(date.getDate() + 50);
	document.getElementById("setDate1").innerHTML = date;
}
function dateInput()
{
	var msecond = Date.parse("4 July, 2016");
	document.getElementById("dateInput").innerHTML = msecond;
}
function dateInputMilliSeconds()
{
	var msecond = Date.parse("4 July, 2016");
	var date = new Date(msecond);
	document.getElementById("dateInputMilliSeconds").innerHTML = date;
}
function dateCompare()
{
	var today, someday, text;
	today = new Date();
	someday = new Date();
	someday.setFullYear(2100, 0, 14);
	if(today > someday)
	{
		text = "Today Is After January 14, 2100."
	}
	else
	{
		text = "Today Is Before January 14, 2100."
	}
	document.getElementById("dateCompare").innerHTML = text;
}
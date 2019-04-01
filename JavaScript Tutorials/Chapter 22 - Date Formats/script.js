function isoDate()
{
	document.getElementById("isoDate").innerHTML = new Date("2016-07-27");
}
function isoDateWithoutDay()
{
	document.getElementById("isoDateWithoutDay").innerHTML = new Date("2015-07");
}
function isoDateWithoutDayAndMonth()
{
	document.getElementById("isoDateWithoutDayAndMonth").innerHTML = new Date ("2016");
}
function isoDateWithDayAndMonth()
{
	document.getElementById("isoDateWithDayAndMonth").innerHTML = new Date("2016-06-27T01:19:07");
}
function shortDates()
{
	document.getElementById("shortDates").innerHTML = new Date("06/27/2016");
}
function shortDates1()
{
	document.getElementById("shortDates1").innerHTML = new Date("2016/06/27");
}
function leadingZero()
{
	document.getElementById("leadingZero").innerHTML = new Date("2016-06-27");
	document.getElementById("leadingZero1").innerHTML = new Date("2016-6-27");
}
function longDates()
{
	document.getElementById("longDates").innerHTML = new Date("Jun 27 2016");
}
function longDatesOrder()
{
	document.getElementById("longDatesOrder").innerHTML = new Date("27 Jun 2016");
}
function longDatesOrder1()
{
	document.getElementById("longDatesOrder1").innerHTML = new Date("27 June 2016");
}
function longDatesOrder2()
{
	document.getElementById("longDatesOrder2").innerHTML = new Date("27 Jun 2016");
}
function longDatesCommas()
{
	document.getElementById("longDatesCommas").innerHTML = new Date("27,Jun,2016");
}
function fullDate()
{
	document.getElementById("fullDate").innerHTML = new Date("Wed Mar 25 2015 13:56:24 GMT+0500 (Pakistan Standard Time)");
}
function fullDate1()
{
	document.getElementById("fullDate1").innerHTML = new Date("Fri Mar 25 2015 09:56:24 GMT+0100 (Tokyo Time)");
}
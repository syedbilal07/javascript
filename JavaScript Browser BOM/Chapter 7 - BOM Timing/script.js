function setTimeoutMethod()
{
	alert("You Have Seen Hello After 3 Seconds!");
}
function setTimeoutMethod1()
{
	alert("You Have Seen Hello After 3 Seconds!");
}
// Set Interval Method
	var myVar = setInterval(setIntervalMethod,1000)
function setIntervalMethod()
{
	var d = new Date();
	document.getElementById("setIntervalMethod").innerHTML = d.toLocaleTimeString();
}
// Clear Interval Method
	var myVar1 = setInterval(myTimer,1000)
function myTimer()
{
	var date = new Date();
	document.getElementById("clearIntervalMethod").innerHTML = date.toLocaleTimeString();
}
function timedText()
{
	setTimeout(myTimeout1,2000);
	setTimeout(myTimeout2,4000);
	setTimeout(myTimeout3,6000);
}
function myTimeout1()
{
	document.getElementById("timedText").innerHTML = "2 Seconds!";
}
function myTimeout2()
{
	document.getElementById("timedText").innerHTML = "4 Seconds!";
}
function myTimeout3()
{
	document.getElementById("timedText").innerHTML = "6 Seconds!";
}
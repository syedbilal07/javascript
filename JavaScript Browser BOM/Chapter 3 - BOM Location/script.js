function windowLocationHref()
{
	document.getElementById("windowLocationHref").innerHTML = "Page Location Is" + " " + window.location.href;
}
function windowLocationHostname()
{
	document.getElementById("windowLocationHostname").innerHTML = "Page Hostname Is" + " " + window.location.hostname;
}
function windowLocationPathname()
{
	document.getElementById("windowLocationPathname").innerHTML = "Page Pathname Is" + " " + window.location.pathname;
}
function windowLocationProtocol()
{
	document.getElementById("windowLocationProtocol").innerHTML = "Page Protocol Is" + " " + window.location.protocol;
}
function windowLocationAssign()
{
	document.getElementById("windowLocationAssign").innerHTML = window.location.assign("http://www.w3schools.com");
}

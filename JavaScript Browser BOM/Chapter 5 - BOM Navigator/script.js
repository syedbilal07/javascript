function navigatorCookieCheck()
{
	document.getElementById("navigatorCookieCheck").innerHTML = "Cookies Enabled Is" + " " + navigator.cookieEnabled;
}
function browserNames()
{
	document.getElementById("browserNames").innerHTML = "Name Is" + " " + navigator.appName + "<br />" + "Code Name Is" + " " + navigator.appCodeName;
}
function browserEngine()
{
	document.getElementById("browserEngine").innerHTML = "Browser Engine Is" + " " + navigator.product;
}
function browserVersion1()
{
	document.getElementById("browserVersion1").innerHTML = "Browser Version Is" + " " + navigator.appVersion;
}
function browserVersion2()
{
	document.getElementById("browserVersion2").innerHTML = "Browser Version Is" + " " + navigator.userAgent;
}
function browserPlatform()
{
	document.getElementById("browserPlatform").innerHTML = "Broswer Platform Is" + " " + navigator.platform;
}
function browserLanguage()
{
	document.getElementById("browserLanguage").innerHTML = "Broswer Language Is" + " " + navigator.language;
}
function javaCheck()
{
	document.getElementById("javaCheck").innerHTML = "Java Enabled Is" + " " + navigator.javaEnabled();
}
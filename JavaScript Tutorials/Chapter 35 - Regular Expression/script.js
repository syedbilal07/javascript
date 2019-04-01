function stringSearchWithRegularExpression()
{
	var string = "Visit W3Schools";
	var search = string.search(/w3Schools/i);
	document.getElementById("stringSearchWithRegularExpression").innerHTML = search;
}
function stringSearchWithString()
{
	var string = "Visit W3Schools";
	var search = string.search("W3Schools");
	document.getElementById("stringSearchWithString").innerHTML = search;
}
function stringReplaceWithRegularExpression()
{
	var string = document.getElementById("stringReplaceWithRegularExpression").innerHTML;
	var replace = string.replace(/Microsoft/i, "W3Schools");
	document.getElementById("stringReplaceWithRegularExpression").innerHTML = replace;
}
function stringReplaceWithString()
{
	var string = document.getElementById("stringReplaceWithString").innerHTML;
	var replace = string.replace("Microsoft", "W3Schools");
	document.getElementById("stringReplaceWithString").innerHTML = replace;
}
function usingTest()
{
	text = document.getElementById("usingTest").innerHTML;
	document.getElementById("test").innerHTML = /e/.test(text);
}
function usingExec()
{
	text = document.getElementById("usingExec").innerHTML;
	document.getElementById("Exec").innerHTML = /e/.exec(text);
}
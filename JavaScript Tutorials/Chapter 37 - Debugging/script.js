function consoleLogMethod()
{
	a = 5;
	b = 6;
	c = a + b;
	console.log(c);
	document.getElementById("consoleLogMethod").innerHTML = c;
}
function debuggerMethod()
{
	var x = 5 * 5;
	debugger;
	document.getElementById("debuggerMethod").innerHTML = x;
}
function simpleFunction(a,b)
{
	return a * b;
	
}
	document.getElementById("simpleFunction").innerHTML = simpleFunction(4,3);

function functionExpressionStoredInAVariable()
{
	var x = function(a,b)
	{
		return a * b;
	}
	document.getElementById("functionExpressionStoredInAVariable").innerHTML = x;
}
function variableCanBeUsedAsAFunction()
{
	var x = function(a,b)
	{
		return a * b
	}
	var y = x(4,3);
	document.getElementById("variableCanBeUsedAsAFunction").innerHTML = y;
}
function functionConstructor()
{
	var myFunction = new Function("a", "b", "return a * b");
	document.getElementById("functionConstructor").innerHTML = myFunction(4,3);
}
function nofunctionConstructor()
{
	var myFunction = function(a,b)
	{
		return a * b;
	}
	document.getElementById("nofunctionConstructor").innerHTML = myFunction(4,3);
}
(function selfInvokingFunction()
{
	document.getElementById("selfInvokingFunction").innerHTML = "Hello ! I Called Myself !"
})();
function functionCanBeUsedAsValues(a,b)
{
	return a * b;
	
}
	var x = functionCanBeUsedAsValues(4,3);
	document.getElementById("functionCanBeUsedAsValues").innerHTML = x;
function functionCanBeUsedAsExpression(a,b)
{
	return a * b;
}
	var x = functionCanBeUsedAsExpression(4,3) * 2;
	document.getElementById("functionCanBeUsedAsExpression").innerHTML = x;
function argumentsLength(a,b)
{
	return arguments.length;
}
	document.getElementById("argumentsLength").innerHTML = argumentsLength(4,3);

function toStringMethod(a,b)
{
	return a * b
}
	document.getElementById("toStringMethod").innerHTML = toStringMethod.toString();
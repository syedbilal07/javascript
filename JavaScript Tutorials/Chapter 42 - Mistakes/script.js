function assignmentOperatorReturnsFalse()
{
	var x = 5;
	document.getElementById("assignmentOperatorReturnsFalse").innerHTML = Boolean(x == 10);
}
function assignmentOperatorReturnsTrue()
{
	var x = 10;
	document.getElementById("assignmentOperatorReturnsTrue").innerHTML = Boolean(x == 10);
}
function ifStatementReturnsFalse()
{
	var x = 0;
	document.getElementById("ifStatementReturnsFalse").innerHTML = Boolean (x = 0);
}
function inRegularComparisonDataTypeDoesNotMatter()
{
	var x = 10;
	var y = "10";
	document.getElementById("inRegularComparisonDataTypeDoesNotMatter").innerHTML = (x == y);
}
function inStrictComparisonDataTypeDoesNotMatter()
{
	var x = 10;
	var y = "10";
	document.getElementById("inStrictComparisonDataTypeDoesNotMatter").innerHTML = (x === y);
}
function caseSwitchWillDisplayAlertMessage()
{
	var x = 10;
	switch(x)
	{
		case 10: alert("Hello Bilal");
	}
	document.getElementById("caseSwitchWillDisplayAlertMessage").innerHTML = x;
}
function caseSwitchWillNotDisplayAlertMessage()
{
	var x = 10;
	switch(x)
	{
		case "10": alert("Hello Bilal");
	}
	document.getElementById("caseSwitchWillNotDisplayAlertMessage").innerHTML = x;
}
function addingANumberWillProduceADifferentResult()
{
	var x = "10" + "5";
	document.getElementById("addingANumberWillProduceADifferentResult").innerHTML = x;
}
function addingTwoVariables()
{
	var x = 10;
	var y = "5"
	var z = x + y;
	document.getElementById("addingTwoVariables").innerHTML = z;
}
function floatTestWillFail()
{
	var x = 0.1;
	var y = 0.2;
	var z = x + y;
	document.getElementById("floatTestWillFail").innerHTML = z;
}
function floatTestSolution()
{
	var x = 0.1;
	var y = 0.2;
	var z = (x * 10 + y * 10) / 10;
	document.getElementById("floatTestSolution").innerHTML = z;
}
function breakingAString()
{
	var x =
	"Hello Bilal";
	document.getElementById("breakingAString").innerHTML = x;
}
function breakingAStringInTheMiddleWillNotWork()
{
	var x = "Hello Bilal";
	document.getElementById("breakingAStringInTheMiddleWillNotWork").innerHTML = x;
}
function breakingAStringUsingBackslash()
{
	var x = "Hello \
			Bilal";
	document.getElementById("breakingAStringUsingBackslash").innerHTML = x;
}
function misplacedSemiColon()
{
	var x = 5;
	if (x == 19);
	{
	document.getElementById("misplacedSemiColon").innerHTML = "Hello Bilal";
	}
}
function breakingAReturnStatement1()
{
	function Num(a)
	{
		var power = 10;
		return a * power;
	}
	document.getElementById("breakingAReturnStatement1").innerHTML = Num(55)
}
function breakingAReturnStatement2()
{
	function Num(a)
	{
		var power = 10;
		return a * power;
	}
	document.getElementById("breakingAReturnStatement2").innerHTML = Num(55);
}
function breakingAReturnStatement3()
{
	function Num(a)
	{
		var 
		power = 10;
		return a * power;
	}
	document.getElementById("breakingAReturnStatement3").innerHTML = Num(55);
}
function breakingAReturnStatement4()
{
	function Num(a)
	{
		var 
		power = 10;
		return 
		a * power;
	}
	document.getElementById("breakingAReturnStatement4").innerHTML = Num(55);
}
function breakingAReturnStatement5()
{
	function Num(a)
	{
		var 
		power = 10;
		return; 
		a * power;
	}
	document.getElementById("breakingAReturnStatement5").innerHTML = Num(55);
}
function accessingArraysWithNamedIndex()
{
	var person = [];
	person[0] = "Syed";
	person[1] = "Bilal";
	person[2] = 23;
	document.getElementById("accessingArraysWithNamedIndex").innerHTML =
	person[1] + " " + person.length; 
}
function objectsAlsoUseNamedIndex()
{
	var person = [];
	person["firstName"] = "Syed";
	person["lastName"] = "Bilal";
	person["age"] = 23;
	document.getElementById("objectsAlsoUseNamedIndex").innerHTML =
	person[1] + " " + person.length; 
}
function expectingBlockLevelReturnsUndefined()
{
	for(var i = 0;i < 10; i++)
	{
		// Some Code
	}
	document.getElementById("expectingBlockLevelReturnsUndefined").innerHTML = i;
}
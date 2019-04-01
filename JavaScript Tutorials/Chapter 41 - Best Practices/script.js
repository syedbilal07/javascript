function neverDeclareObjectsStringTogether()
{
	var x = "Syed Bilal";
	var y = new String("David Villa");
	document.getElementById("neverDeclareObjectsStringTogether").innerHTML = (x === y);
}
function comparingObjects()
{
	var x = new String("Syed Bilal");
	var y = new String("David Villa");
	document.getElementById("comparingObjects").innerHTML = (x == y);
}
function dontUseNewObjects()
{
	var x1 = {};
	var x2 = "";
	var x3 = 0;
	var x4 = false;
	var x5 = [];
	var x6 = /()/;
	var x7 = function(){};
	document.getElementById("dontUseNewObjects").innerHTML = 
	"x1: " + typeof x1 + "<br />" +
	"x2: " + typeof x2 + "<br />" +
	"x3: " + typeof x3 + "<br />" +
	"x4: " + typeof x4 + "<br />" +
	"x5: " + typeof x5 + "<br />" +
	"x6: " + typeof x6 + "<br />" + 
	"x7: " + typeof x7;
}
function stringsConvertToNumbers()
{
	var x = "Syed Bilal";
	x = 5;
	document.getElementById("stringsConvertToNumbers").innerHTML = typeof x;
}
function numbersConvertToString()
{
	var x = 5;
	// x = 5 + 7; // x.valueOf() is 12, typeof x is a number
	// x = 5 + "7"; // x.valueOf() is 57, typeof x is a string
	// x = "5" + 7;  // x.valueOf() is 57, typeof x is a string
	// x = 5 - 7;  // x.valueOf() is -2, typeof x is a number
	// x = 5 - "7"; // x.valueOf() is -2, typeof x is a number
	// x = "5" - 7;  // x.valueOf() is -2, typeof x is a number
	// x = 5 - x; // x.valueOf() is NaN, typeof x is a number
	document.getElementById("numbersConvertToString").innerHTML = x.valueOf() + " " + typeof x;
}
function subtractingAStringFromAString()
{
	document.getElementById("subtractingAStringFromAString").innerHTML = "Hello" - "Bilal";
}
function comparisonOperator()
{
	var x;
	// x = (0 == ""); // true
	// x = (1 == "1"); // true
	// x = (1 == true); // true
	
	// x = (0 === ""); // false
	// x = (1 === "1"); // false
	// x = (1 === true); // false
	document.getElementById("comparisonOperator").innerHTML = x;
}
function useParameterDefaults(x,y)
{
	if(y === undefined)
	{
		y = 0;
	}
	return x * y;
}
document.getElementById("useParameterDefaults").innerHTML = useParameterDefaults(4);
// End Switch With Default
function endSwitchWithDefault()
{
	switch(new Date().getDay())
	{
		case 0:
			day = "Sunday";
			break;
		case 1:
			day = "Monday";
			break;
		case 2:
			day = "Tuesday";
			break;
		case 3:
			day = "Wednesday";
			break;
		case 4:
			day = "Thursday";
			break;
		case 5:
			day = "Friday";
			break;
		case 6:
			day = "Saturday"
			break;
		default:
			day = "Unknown";
	}
	document.getElementById("endSwitchWithDefault").innerHTML = "Todat Is " + day;
}
function parameterDefaults(x,y)
{
	if(y == undefined)
	{
		y = 0;
	}
	return  x * y;
}
	document.getElementById("parameterDefaults").innerHTML = parameterDefaults(4);

function argumentsObject()
{
	var i;
	var max = -Infinity;
	for(i = 0; i < arguments.length; i++)
	{
		if(arguments[i] > max)
		{
			max = arguments[i];
		}
	}
	return max;
}
	document.getElementById("argumentsObject").innerHTML = argumentsObject(4,5,6);
function functionForInputValues()
{
	var i, sum = 0;
	for(i = 0; i < arguments.length; i++)
	{
		sum += arguments[i];
	}
	return sum;
}
	document.getElementById("functionForInputValues").innerHTML = functionForInputValues(1, 123, 500, 115, 44, 88);
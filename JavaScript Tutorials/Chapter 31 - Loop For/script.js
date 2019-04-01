function forLoop()
{
	var cars = ["Civic","City","Accord","BMW"];
	var text = "";
	var i;
	for (i = 0;i < cars.length; i++)
	{
		text += cars[i] + "<br />";
	}
	document.getElementById("forLoop").innerHTML = text;
}
function forLoop1()
{
	var text = "";
	var i;
	for(i = 0; i < 5; i++)
	{
		text += "The number is "+ i + "<br />";
	}
	document.getElementById("forLoop1").innerHTML = text;
}
function forLoop2()
{
	var cars = ["Civic","City","Accord","BMW"];
	var i, len, text;
	for(i = 0, len = cars.length, text = "";i < len; i++ )
	{
		text += cars[i] + "<br />";
	}
	document.getElementById("forLoop2").innerHTML = text;
}
function forLoop3()
{
	var cars = ["Civic","City","Accord","BMW"];
	var len, i , text;
	len = cars.length;
	i = 0;
	text = "";
	for (;i < len;i++)
	{
		text += cars[i] + "<br />";
	}
	document.getElementById("forLoop3").innerHTML = text;
}
function forLoop4()
{
	var cars = ["Civic","City","Accord","BMW"];
	var len, i , text;
	len = cars.length;
	i = 0;
	text = "";
	for (;i < len; )
	{
		text += cars[i] + "<br />";
		i++;
	}
	document.getElementById("forLoop4").innerHTML = text;
}
function forInLoop()
{
	var text = "";
	var x;
	var person = {firstName: "Syed", lastName:"Bilal", age:25};
	for (x in person)
	{
		text += person[x] + " ";
	}
	document.getElementById("forInLoop").innerHTML = text;
}
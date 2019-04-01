function whileLoop()
{
	var text = "";
	var i = 0;
	while (i < 10)
	{
		text +="<br /> The Number Is " + i;
		i++;
	}
	document.getElementById("whileLoop").innerHTML = text;
}
function doWhileLoop()
{
	var i = 0;
	var text = "";
	do
	{
		text += "<br /> The Number Is "+ i;
		i++;
	}
	while(i < 10)
	document.getElementById("doWhileLoop").innerHTML = text;
}
function forLoop()
{
	var cars = ["Civic","City","Accord","Ferrari"];
	var i = 0;
	var text = "";
	var length = cars.length;
	for (;i < length;i++)
	{
		text += cars[i] + "<br />";
	}
	document.getElementById("forLoop").innerHTML = text;
}
function whileLoop1()
{
	var cars = ["Civic","City","Accord","Ferrari"];
	var i = 0;
	var text = "";
	while(cars[i])
	{
		text += cars[i] + "<br />";
		i++;
	}
	document.getElementById("whileLoop1").innerHTML = text;
}
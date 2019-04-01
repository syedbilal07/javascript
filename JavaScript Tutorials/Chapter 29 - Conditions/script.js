function ifStatement()
{
	if(new Date().getHours() < 18)
	{
		document.getElementById("ifStatement").innerHTML = "Good Morning.!";
	}
	else
	{
		document.getElementById("ifStatement").innerHTML = "Good Evening.!";
	}
}
function elseStatement()
{
	if(new Date().getHours() < 18)
	{
		document.getElementById("elseStatement").innerHTML = "Good Morning.!";
	}
	else
	{
		document.getElementById("elseStatement").innerHTML = "Good Evening.!";
	}
}
function elseIfStatement()
{
	var time = new Date().getHours();
	if(time < 10)
	{
		document.getElementById("elseIfStatement").innerHTML = "Good Morning.!";
	}
	else if(time < 20)
	{
		document.getElementById("elseIfStatement").innerHTML = "Good Day.!";
	}
	else
	{
		document.getElementById("elseIfStatement").innerHTML = "Good Evening.!";
	}
}
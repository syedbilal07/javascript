function breakStatement()
{
	var text = "";
	var i = 0;
	for(;i < 5; i++)
	{
		if(i === 3)
		{
			break;
		}
		text += "<br /> The Number Is " + i;
	}
	document.getElementById("breakStatement").innerHTML = text;
}
function continueStatement()
{
	var text = "";
	var  i = 0;
	for(;i < 10;i++)
	{
		if(i === 3)
		{
			continue;
		}
		text += "<br /> The Number Is " + i;
	}
	document.getElementById("continueStatement").innerHTML = text;
}
function breakStatementWithLabel()
{
	var cars = ["Civic", "City", "Accord", "BMW"];
	var text = "";
	list:
	{
		text += cars[0] + "<br />";
		text += cars[1] + "<br />";
		text += cars[2] + "<br />";
		break list;
		text += cars[3] + "<br />";
		text += cars[4] + "<br />";
		text += cars[5] + "<br />";
	}
	document.getElementById("breakStatementWithLabel").innerHTML = text;
}
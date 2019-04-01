function switchFunction()
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
		case  4:
			day = "Thursday";
			break;
		case 5:
			day = "Friday";
			break;
		case 6:
			day = "Saturday";
			break;
		case 7:
			day = "Sunday";
	}
	document.getElementById("switchFunction").innerHTML = "Today Is" + " " + day;
}
function defaultFunction()
{
	switch(new Date().getDay())
	{
		case 0:
			day = "Sunday";
			break;
		case 6:
			day = "Saturday";
			break;
		default:
			text = "Looking Forward To The Weekend";
	}
	document.getElementById("defaultFunction").innerHTML = text;
}
function fallThrough()
{
	switch(new Date().getDay())
	{
		case 1:
		case 2:
		case 3:
		default:
			text = "Looking Forward To The Weekend";
			break;
		case 4:
		case 5:
			text = "Soon It Is Weekend";
			break;
		case 0:
		case 6:
			text = "It Is Weekend.! :)";
	}
	document.getElementById("fallThrough").innerHTML = text;
}
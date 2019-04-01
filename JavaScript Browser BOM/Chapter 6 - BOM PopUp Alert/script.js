function windowAlert()
{
	document.getElementById("windowAlert").innerHTML = window.alert("I Am An Alert Box!");
}
function windowConfirm()
{
	var x;
	if(confirm("Press a button!") == true)
	{
		x = "You Pressed OK!";
	}
	else
	{
		x = "You Pressed Cancel!";
	}
	document.getElementById("windowConfirm").innerHTML = x;
}
function windowPrompt()
{
	var person = prompt("Please Enter Your Name", "Syed Bilal")
	if (person != null)
	{
		document.getElementById("windowPrompt").innerHTML = "Hello " + person + ". How Are You Today.?";
	}
}
function lineBreaks()
{
	document.getElementById("lineBreaks").innerHTML = alert("Hello!\nHow Are You Today.?");
}
function conditional()
{
	var age, voteable;
	age = document.getElementById("age").value;
	voteable = (age < 18) ? "Too Young":"Old Enough";
	document.getElementById("conditional").innerHTML = voteable + " " + "To Vote";
}
function comparingTypes()
{
	var age, vote, voteable;
	age = Number(document.getElementById("age1").value);
	if (isNaN(age))
	{
		voteable = "Error In Input";	
	}
	else
	{
		voteable = (age < 18) ? "Too Young":"Old Enough"; 
	}
	document.getElementById("comparingTypes").innerHTML = voteable + " " + "To Vote";
}
function bitwise1()
{
	x = 5 & 1;
	document.getElementById("bitwise1").innerHTML = x;
}
function bitwise2()
{
	x = 5 | 1;
	document.getElementById("bitwise2").innerHTML = x;
}
function bitwise3()
{
	x = 5 >> 1;
	document.getElementById("bitwise3").innerHTML = x;
}
function bitwise4()
{
	x = 5 << 1;
	document.getElementById("bitwise4").innerHTML = x;
}
function bitwise5()
{
	x = ~5;
	document.getElementById("bitwise5").innerHTML = x;
}
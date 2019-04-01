// JavaScript Can Change HTML Attributes
function changeImage()
{
	var image = document.getElementById('myImage');
	if (image.src.match("bulbon"))
	{
		image.src = "bulboff.gif";
	}
	else 
	{
		image.src = "bulbon.gif";
	}
}
// JavaScript Can Change HTML Styles (CSS)
function changeStyle()
{
	var x = document.getElementById("demo3");
	x.style.fontSize = "40px";
	x.style.color = "red";
}
// JavaScript Can Strict User Input
function inputValidation()
{
	var x, text;
	x = document.getElementById("numb").value;
	if (isNaN(x) || x < 1 || x > 10)
	{
		text = "Input Not Valid";
	}
	else
	{
		text = "Input Is OK";
	}
	document.getElementById("demos").innerHTML = text;
}
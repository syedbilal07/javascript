function windowSize()
{
	var w = 
	window.innerWidth;
	document.documentElement.clientWidth;
	document.body.clientWidth;
	var h =
	window.innerHeight;
	document.documentElement.clientHeight;
	document.body.clientHeight;
	var x = document.getElementById("windowSize");
	x.innerHTML = "The Browser's Inner Window Width Is :- " + w + " " + "," + " " + "The Browser's Inner Height Is :- " + " " + h + ".";
}
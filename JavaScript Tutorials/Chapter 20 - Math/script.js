function randomNumber()
{
	document.getElementById("randomNumber").innerHTML = Math.random();
}
function mathMin()
{
	document.getElementById("mathMin").innerHTML = Math.min(-200,0,200,400,500,800);
}
function mathMax()
{
	document.getElementById("mathMax").innerHTML = Math.max(-200,0,200,400,500,800);
}
function mathRandom()
{
	document.getElementById("mathRandom").innerHTML = Math.random();
}
function mathRound()
{
	document.getElementById("mathRound").innerHTML = Math.round(4.7);
}
function mathCeil()
{
	document.getElementById("mathCeil").innerHTML = Math.ceil(4.1);
}
function mathFloor()
{
	document.getElementById("mathFloor").innerHTML = Math.floor(4.7);
}
function mathFloorAndRandom()
{
	document.getElementById("mathFloorAndRandom").innerHTML = Math.floor(Math.random() * 11);
}
function mathConstant()
{
	document.getElementById("mathConstant").innerHTML = "Returns Euler's Number :" + " " + Math.E + "<br>" + "Returns PIE :" + " " + Math.PI + "<br>" + "Returns The Square Root Of 2 :" + " " + Math.SQRT2 + "<br>" + "Returns The Square Root Of 10 :" + " " + Math.SQRT1_2 + "<br>" + "Returns The Natural Logarithm Of 2 :" + " " + Math.LN2 + "<br>" + "Returns The Natural Logarithm Of 10 :" + " " + Math.LN10 + "<br>" + "Returns The Base Logarithm Of E :" + " " + Math.LOG2E + "<br>" + "Returns The Base Logarithm Of E :" + " " + Math.LOG10E;
}

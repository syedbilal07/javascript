// Add Event Listener
	document.getElementById("eventListener").addEventListener("click", addEventListener);
function addEventListener()
{
	document.getElementById("addEventListener").innerHTML = Date();
}
// Add Event Handler
	document.getElementById("eventHandler1").addEventListener("click",addEventHandler1);
function addEventHandler1()
{
	alert("Hello World");
}
// Add Event Handler
	document.getElementById("eventHandler2").addEventListener("click",addEventHandler2);
function addEventHandler2()
{
	document.getElementById("addEventHandler2").innerHTML = alert("Hello Syed Bilal.!");
}
// Add Many Event Handlers
	var x = document.getElementById("addManyEventHandlers");
	x.addEventListener("click",addManyEventHandlers1);
	x.addEventListener("click",addManyEventHandlers2);
function addManyEventHandlers1()
{
	alert("This Is 1st Alert");
}
function addManyEventHandlers2()
{
	alert("This Is 2nd Alert");
}
// Add Event Handlers Of Different Types
	var y = document.getElementById("addEventHandlersOfDifferentTypes");
	y.addEventListener("mouseover",mouseOver);
	y.addEventListener("mouseout",mouseOut);
	y.addEventListener("click",click);
function mouseOver()
{
	document.getElementById("differentEventHandlers").innerHTML += "Moused Over! <br />";
}
function mouseOut()
{
	document.getElementById("differentEventHandlers").innerHTML += "Moused Out! <br />";
}
function click()
{
	document.getElementById("differentEventHandlers").innerHTML += "Clicked! <br />";
}
// Add Event Handler To Window Object (Not Working)
	window.addEventListener("resize", function()
{
	document.getElementById("addEventHandlerToWindowObject").innerHTML = Math.random();
})
// Passing Parameters
	var p1 = 7;
	var p2 = 5;
	document.getElementById("passingParameters").addEventListener("click", function()
	{
		passingParameters(p1,p2);
	})
function passingParameters(a,b)
{
	var result = a * b;
	document.getElementById("passingParameters").innerHTML = result;
}
// Event Bubbling
	document.getElementById("myDiv").addEventListener("click",function()
{
	alert("You Have Clicked The Div Element");
},false);
	document.getElementById("myP").addEventListener("click",function()
{
	alert("You Have Clicked The Paragraph Element");
},false);
	document.getElementById("myDiv2").addEventListener("click",function()
{
	alert("You Have Clicked The Div Element");
},true);
	document.getElementById("myP2").addEventListener("click",function()
{
	alert("You Have Clicked The Paragraph Element");
},true);
// Remove Event Listener
	document.getElementById("myDIV").addEventListener("mousemove",myFunction);
function myFunction()
{
	document.getElementById("removeEventListener").innerHTML = Math.random();
}
function removeHandler()
{
	document.getElementById("myDIV").removeEventListener("mousemove",myFunction);
}
// Cross Browser Solution
	var x = document.getElementById("crossBrowserSolution");
	if (x.addEventListener)
	{
		x.addEventListener("click",crossBrowserSolution);
	}
	else if(x.attachEvent)
	{
		x.attachEvent("click",crossBrowserSolution);
	}
function crossBrowserSolution()
{
	alert("Its Working !");
}
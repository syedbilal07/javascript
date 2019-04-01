function findingElementsById()
{
	var myElement = document.getElementById("intro");
	document.getElementById("findingElementsById").innerHTML = "The Text From The Intro Paragraph Is " + myElement.innerHTML;
}
function findingElementsByTagNames1()
{
	var x = document.getElementsByTagName("p");
	document.getElementById("findingElementsByTagNames1").innerHTML = "The First Paragraph (Index 0) Is  :- " + "<b>" + x[0].innerHTML + "</b>";
}
function findingElementsByTagNames2()
{
	var x = document.getElementById("main");
	var y = x.getElementsByTagName("p");
	document.getElementById("findingElementsByTagNames2").innerHTML = "The First Paragraph Inside Main Is :- " + "<b>" + y[0].innerHTML + "</b>";
}
function findingElementsByClassNames()
{
	var x = document.getElementsByClassName("intro");
	document.getElementById("findingElementsByClassNames").innerHTML = "The First Paragraph With Class Intro Is : - " + "<b>" + x[0].innerHTML + "</b>"
}
function findingElementsByCSSSelectors()
{
	var x = document.querySelectorAll("p.intro");
	document.getElementById("findingElementsByCSSSelectors").innerHTML = "The first paragraph (index 0) with class=intro is : -" + "<b>" + x[0].innerHTML + "</b>"
}
function findingElementsByHTMLObjectCollections()
{
	var x = document.forms["frm1"];
	var text = "";
	var i;
	for(i = 0; i < x.length; i++)
	{
		text += x.elements[i].value + "<br />";
	}
	document.getElementById("findingElementsByHTMLObjectCollections").innerHTML = text;
}

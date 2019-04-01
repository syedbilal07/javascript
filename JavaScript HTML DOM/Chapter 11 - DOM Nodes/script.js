function creatingNode()
{
	var para = document.createElement("p");
	var node = document.createTextNode("This Is A New Paragraph");
	para.appendChild(node);
	var element = document.getElementById("div1");
	element.appendChild(para);
}
function insertBeforeMethod()
{
	var para = document.createElement("p");
	var node = document.createTextNode("This Is A New Paragraph");
	para.appendChild(node);
	var element = document.getElementById("div2");
	var child = document.getElementById("p3");
	element.insertBefore(para,child);
}
function removeExistingHTMLElement()
{
	var parent = document.getElementById("div3");
	var child = document.getElementById("p5");
	parent.removeChild(child);
}
function replaceHTMLElement()
{
	var parent = document.getElementById("div4");
	var child = document.getElementById("p7");
	var para = document.createElement("p");
	var node = document.createTextNode("This Is A New Paragraph");
	para.appendChild(node);
	parent.replaceChild(para,child);
}
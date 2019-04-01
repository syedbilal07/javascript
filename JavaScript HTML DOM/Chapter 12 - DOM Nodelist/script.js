function selectAllNodes()
{
	var node = document.getElementsByTagName("p");
	document.getElementById("selectAllNodes").innerHTML = 
	"The Second Paragraph InnerHTML Is : - " + "<b>" + node[1].innerHTML + "</b>";
}
function lengthProperty()
{
	var node = document.getElementsByTagName("p");
	document.getElementById("lengthProperty").innerHTML = node.length;
}
function lengthPropertyInLoops()
{
	var node = document.getElementsByTagName("p");
	var i;
	for(i = 0; i <node.length; i++)
	{
			node[i].style.backgroundColor = "silver";
	}
}
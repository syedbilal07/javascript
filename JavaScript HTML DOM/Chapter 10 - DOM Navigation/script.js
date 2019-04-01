function collectionOfNodes()
{
	var myText = document.getElementById("collectionOfNodesHeading").childNodes[0].nodeValue;
	document.getElementById("collectionOfNodesParagraph").innerHTML = myText;
		
}
function collectionOfNodesUsingFirstChild()
{
	var myText = document.getElementById("collectionOfNodesUsingFirstChildHeading").firstChild.nodeValue;
	document.getElementById("collectionOfNodesUsingFirstChildParagraph").innerHTML = myText;
}
function DOMRootNodes1()
{
	alert(document.body.innerHTML);
}
function DOMRootNodes2()
{
	alert(document.documentElement.innerHTML);
}
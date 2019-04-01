function toStringMethod()
{
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("toStringMethod").innerHTML = fruits.toString(); 
}
function joinMethod()
{
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("joinMethod").innerHTML = fruits.join(" * ");
}
// Pop Method
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("popMethod").innerHTML = fruits;
function popMethod()
{
	fruits.pop();
	document.getElementById("popMethod").innerHTML = fruits;
}
// Pop Value Method
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("popMethodValue").innerHTML = fruits;
function popMethodValue()
{
	document.getElementById("popMethodValue").innerHTML = fruits.pop();
}
// Push Method
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("pushMethod").innerHTML = fruits;
function pushMethod()
{
	fruits.push("Apple");
	document.getElementById("pushMethod").innerHTML = fruits;
}
// Push Method Array Length
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("pushMethodArrayLength").innerHTML = fruits;
function pushMethodArrayLength()
{
	document.getElementById("pushMethodArrayLength").innerHTML = fruits.push("Apple");
}
// Shift Method
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("shiftMethod").innerHTML = fruits;
function shiftMethod()
{
	fruits.shift();
	document.getElementById("shiftMethod").innerHTML = fruits;
}
// UnShift Method
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("unshiftMethod").innerHTML = fruits;
function unshiftMethod()
{
	fruits.unshift("Kiwi");
	document.getElementById("unshiftMethod").innerHTML = fruits;
}
// Changing Array Elements
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("changingArrayElements").innerHTML = fruits;
function changingArrayElements()
{
	fruits[0] = "Kiwi";
	document.getElementById("changingArrayElements").innerHTML = fruits;
}
// Changing Array Elements Length
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("changingArrayElementsLength").innerHTML = fruits;
function changingArrayElementsLength()
{
	fruits[fruits.length] = "Kiwi";
	document.getElementById("changingArrayElementsLength").innerHTML = fruits;
}
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("deletingElements").innerHTML = fruits;
function deletingElements()
{
	delete fruits[0];
	document.getElementById("deletingElements").innerHTML = fruits[0];
}
// Splice Mthod
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("spliceMethod").innerHTML = fruits;
function spliceMethod()
{
	fruits.splice(2,0, "Lemon", "Kiwi");
	document.getElementById("spliceMethod").innerHTML = fruits;
}
// Splice Remove Method
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("spliceMethodRemove").innerHTML = fruits;
function spliceMethodRemove()
{
	fruits.splice(0,1);
	document.getElementById("spliceMethodRemove").innerHTML = fruits;
}
function concatMethod()
{
	var myGirls = ["Celine","Emma","Anna"];
	var myBoys = ["David","Messi","Neymar"];
	var myChildren = myGirls.concat(myBoys);
	document.getElementById("concatMethod").innerHTML = myChildren;
}
function concatMethodArguments()
{
	var myGirls = ["Celine","Emma","Anna"];
	var myBoys = ["David","Messi","Neymar"];
	var otherBoys = ["Ronaldo","Rivaldo","Cooper"];
	var myChildren = myGirls.concat(myBoys,otherBoys);
	document.getElementById("concatMethodArguments").innerHTML = myChildren;
}
function sliceMethod()
{
	var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
	var fruits1 = fruits.slice(1);
	document.getElementById("sliceMethod").innerHTML = fruits + "<br>" + fruits1;
}
function sliceMethodArray()
{
	var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
	var fruits1 = fruits.slice(3);
	document.getElementById("sliceMethodArray").innerHTML = fruits + "<br>" + fruits1;
}
function sliceMethodArrayArguments()
{
	var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
	var fruits1 = fruits.slice(1,3);
	document.getElementById("sliceMethodArrayArguments").innerHTML =  fruits + "<br>" + fruits1;
}
function valueOfMethod()
{
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("valueOfMethod").innerHTML = fruits;
}
function valueOf1()
{
	document.getElementById("valueOf1").innerHTML = fruits.valueOf();
}
function valueOf2()
{
	document.getElementById("valueOf2").innerHTML = fruits.toString();
}
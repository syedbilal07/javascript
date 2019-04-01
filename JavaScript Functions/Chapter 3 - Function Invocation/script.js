function invokingAFunctionAsAFunction(a,b)
{
	return a * b;
}
	document.getElementById("invokingAFunctionAsAFunction").innerHTML = invokingAFunctionAsAFunction(10,2);
function myFunctionAndWindowFunction(a,b)
{
	return a * b;
}
	document.getElementById("myFunctionAndWindowFunction").innerHTML = window.myFunctionAndWindowFunction(10,2);
function globalObject()
{
	return this;
}
	document.getElementById("globalObject").innerHTML = globalObject();
function invokingFunctionAsAMethod()
{
	var myObject = {
		firstName : "Syed",
		lastName: "Bilal",
		age: 23,
		fullName: function()
		{
			return this.firstName + " " + this.lastName;
		}
	}
	document.getElementById("invokingFunctionAsAMethod").innerHTML = myObject.fullName();
}
function thisMethod()
{
	var myObject = {
		firstName : "Syed",
		lastName: "Bilal",
		fullName: function()
		{
			return this;
		}
	}
	document.getElementById("thisMethod").innerHTML = myObject.fullName();
}
function invokingAFunctionWithAFunctionConstructor(first,last)
{
	this.firstName = first;
	this.lastName = last;	
}
	var x = new invokingAFunctionWithAFunctionConstructor("Syed", "Bilal");
	document.getElementById("invokingAFunctionWithAFunctionConstructor").innerHTML = x.lastName;
// Invoking A Function With A Function Method
	var myObject;
function invokingAFunctionWithAFunctionMethod1(a,b)
{
	return a * b;
}
	myObject = invokingAFunctionWithAFunctionMethod1.call(myObject,10,2);
	document.getElementById("invokingAFunctionWithAFunctionMethod1").innerHTML = myObject;
// Invoking A Function With A Function Method
	var myObject, myArray;
function invokingAFunctionWithAFunctionMethod2(a,b)
{
	return a * b;
}
	myArray = [10,2];
	myObject = invokingAFunctionWithAFunctionMethod2.apply(myObject,myArray);
	document.getElementById("invokingAFunctionWithAFunctionMethod2").innerHTML = myObject;

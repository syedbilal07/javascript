function accessingProperty1()
{
	var person = {firstName:"Syed", lastName:"Bilal", age:23};
	document.getElementById("accessingProperty1").innerHTML = 
	person.firstName + " " + person.lastName + " " + "Is" + " " + person.age + " " + "Years Old";
}
function accessingProperty2()
{
	var person = {firstName:"Syed", lastName:"Bilal", age:23};
	document.getElementById("accessingProperty2").innerHTML = 
	person["firstName"] + " " + person["lastName"] + " " + "Is" + " " + person["age"] + " " + "Years Old";
}
function loopingInProperty()
{
	var person = {firstName:"Syed", lastName:"Bilal", age:23};
	var x;
	var txt = "";
	for(x in person)
	{
		txt += person[x] + " ";
	}
	document.getElementById("loopingInProperty").innerHTML = txt;
}
function addingNewProperty()
{
	var person = {firstName:"Syed", lastName:"Bilal", age:23};
	person.nationality = "Pakistani";
	document.getElementById("addingNewProperty").innerHTML = 
	person.firstName + " " + person.lastName + " " + "Is" + " " + person.nationality;
}
function deletingProperty()
{
	var person = {firstName:"Syed", lastName:"Bilal", age:23};
	delete person.age;
	document.getElementById("deletingProperty").innerHTML = 
	person["firstName"] + " " + person["lastName"] + " " + "Is" + " " + person["age"] + " " + "Years Old";
}
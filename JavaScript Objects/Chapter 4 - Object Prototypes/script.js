function usingNew(firstName,lastName,age,eyeColor)
{
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.eyeColor = eyeColor;
}
	var myFather = new usingNew("Syed", "Zakir", 69, "Brown");
	var myMother = new usingNew("Qamar", "Sultana", 64, "Black");
	document.getElementById("usingNew").innerHTML = 
	"My Father Is" + " " + myFather.age + ". My Mother Is" + " " + myMother.age;
// Adding Property To Existing Object
function addingPropertyToExistingObject(firstName,lastName,age,eyeColor)
{
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.eyeColor = eyeColor;
	
}
	var myFather = new usingNew("Syed", "Zakir", 69, "Brown");
	var myMother = new usingNew("Qamar", "Sultana", 64, "Black");
	myFather.nationality = "Pakistani";
	document.getElementById("addingPropertyToExistingObject").innerHTML = 
	"My Father Is" + " " + myFather.nationality;
function addingNewMethodToExistingObject()
{
	var myFather = {
		firstName: "Syed",
		lastName: "Zakir",
		age: 69,
		eyeColor: "Brown",
		fullName: function()
		{
			return this.firstName + " " + this.lastName;
		}
	}
	document.getElementById("addingNewMethodToExistingObject").innerHTML = 
	"My Father Name Is" + " " + myFather.fullName();
}
function addingPropertyToPrototype(firstName, lastName, age, eyeColor)
{
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.eyeColor = eyeColor;
}
	var myFather = new addingPropertyToPrototype("Syed", "Zakir", 69, "Brown");
	var myMother = new addingPropertyToPrototype("Qamar", "Sultana", 64, "Black");
	addingPropertyToPrototype.nationality = "Pakistani";
	document.getElementById("addingPropertyToPrototype").innerHTML = 
	"My Father Is" + " " + myFather.age + ". My Mother Is" + " " + myMother.age + "<br />" +
	"My Father's Nationality Is" + " " + myFather.nationality;
function addingPropertyToPrototypeUsingConstructor(firstName, lastName, age, eyeColor)
{
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.eyeColor = eyeColor;
	this.nationality = "Pakistani";
}
	var myFather = new addingPropertyToPrototypeUsingConstructor("Syed", "Zakir", 69, "Brown");
	var myMother = new addingPropertyToPrototypeUsingConstructor("Qamar", "Sultana", 64, "Black");
	document.getElementById("addingPropertyToPrototypeUsingConstructor").innerHTML = 
	"My Father Is" + " " + myFather.age + ". My Mother Is" + " " + myMother.age + "<br />" +
	"My Father's Nationality Is" + " " + myFather.nationality; 
function addingMethodsToPrototype(firstName, lastName, age, eyeColor)
{
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.eyeColor = eyeColor;
	this.name = function(){
		return this.firstName + " " + this.lastName;
	}
}
	var myFather = new addingMethodsToPrototype("Syed", "Zakir", 69, "Brown");
	var myMother = new addingMethodsToPrototype("Qamar", "Sultana", 64, "Black");
	document.getElementById("addingMethodsToPrototype").innerHTML = 
	"My Mother Name Is" + " " + myMother.name();
function prototypeProperty(firstName, lastName, age, eyeColor)
{
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.eyeColor = eyeColor;
}
	prototypeProperty.prototype.nationality = "Pakistani";
	var myFather = new prototypeProperty("Syed", "Zakir", 69, "Brown");
	document.getElementById("prototypeProperty").innerHTML = 
	"My Father's Nationality Is" + " " + myFather.nationality;
function prototypeProperty1(firstName, lastName, age, eyeColor)
{
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.eyeColor = eyeColor;
}
	prototypeProperty1.prototype.name = function(){
		return this.firstName + " " + this.lastName;
	};
	var myFather = new prototypeProperty1("Syed", "Zakir", 69, "Brown");
	document.getElementById("prototypeProperty1").innerHTML = 
	"My Father's Name Is" + " " + myFather.name();
	
function accessingObjectMethod1()
{
	var person = {
			firstName: "Syed",
			lastName: "Bilal",
			age: 23,
			eyeColor: "Black",
			fullName: function(){
				return this.firstName + " " + this.lastName
			}
	}
	document.getElementById("accessingObjectMethod1").innerHTML = person.fullName();
}
function accessingObjectMethod2()
{
	var person = {
			firstName: "Syed",
			lastName: "Bilal",
			age: 23,
			eyeColor: "Black",
			fullName: function(){
				return this.firstName + " " + this.lastName
			}
	}
	document.getElementById("accessingObjectMethod2").innerHTML = person.fullName;
}
function addingNewMethods(firstName,lastName,age,eyeColor)
{
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.eyeColor = eyeColor;
	this.changeName = function(name)
	{
		this.lastName = name;
	}
}
	var myMother = new addingNewMethods("Sally","Rally",56,"Blue");
	myMother.changeName("Victoria");
	document.getElementById("addingNewMethods").innerHTML = 
	"My Mother's Last Name Is" + " " + myMother.lastName;

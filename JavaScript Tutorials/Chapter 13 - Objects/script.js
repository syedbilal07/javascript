// Creation Of Object
var person =
{
	firstName:"Syed",
	lastName:"Bilal",
	age:23,
	eyeColor:"Black",
	fullName: function()
	{
		return this.firstName + " " + this.lastName;
	}
};
document.getElementById("demo").innerHTML = person.fullName();
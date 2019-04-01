function jsonObjects()
{
	var text = '{"employees":[' +
			'{"firstName":"John", "lastName":"Doe"},' +
			'{"firstName":"Anna", "lastName":"Smith"},' +
			'{"firstName":"Peter", "lastName":"Jones"}]}';
	var obj = JSON.parse(text);
	document.getElementById("jsonObjects").innerHTML = 
	obj.employees[1].firstName + " " + obj.employees[1].lastName;
}
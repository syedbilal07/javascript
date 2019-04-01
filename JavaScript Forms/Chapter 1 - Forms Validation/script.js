function validateForm()
{
	var x = document.forms["myForm"]["firstname"].value;
	if(x == null || x == "")
	{
		alert("Name must be filled out");
		return false;
	}
}
function formNumericValidation()
{
	var x, text;
	x = document.getElementById("formNumericValidate").value;
	if (isNaN(x) || x < 1 || x > 10)
	{
		text = "Input Not Valid";
	}
	else
	{
		text = "Input Is OK";
	}
	document.getElementById("formNumericValidation").innerHTML = text;
}
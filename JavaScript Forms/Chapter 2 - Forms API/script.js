function checkValidation()
{
	var inpObj = document.getElementById("checkValidityMethod");
	if(inpObj.checkValidity() == false)
	{
		document.getElementById("checkValidity").innerHTML = inpObj.validationMessage;
	}
	else
	{
		document.getElementById("checkValidity").innerHTML = "Input Is OK";
	}
}
function checkRangeOverflowMethod()
{
	var txt = "";
	if(document.getElementById("inputRangeOverflow").validity.rangeOverflow)
	{
		txt = "Value Too Large";
	}
	else
	{
		txt = "Input Is OK";
	}
	document.getElementById("rangeOverflow").innerHTML = txt;
}
function rangeUnderflowMethod()
{
	var txt = "";
	if(document.getElementById("inputRangeUnderflow").validity.rangeUnderflow)
	{
		txt = "Value Too Low";
	}
	else
	{
		txt = "Input Is OK";
	}
	document.getElementById("rangeUnderflow").innerHTML = txt;
}
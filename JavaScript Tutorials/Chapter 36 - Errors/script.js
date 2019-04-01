function tryCatchError()
{
	try
	{
		addlert("Welcome Guest!");
	}
	catch(err)
	{
		document.getElementById("tryCatchError").innerHTML = err.message;
	}
}
function inputValidation()
{
	var message, x;
	message = document.getElementById("inputValidation").innerHTML;
	message = "";
	x = document.getElementById("input").value;
	try
	{
		if(x == "") throw "Empty";
		if(isNaN(x)) throw "Is Not A Number";
		x = Number(x);
		if (x < 5) throw "Too Low";
		if(x > 10) throw "Too High";
	}
	catch(err)
	{
		document.getElementById("inputValidation").innerHTML = "Input Is " + err;
	}
}
function finallyStatement()
{
	var message, x;
	message = "";
	message = document.getElementById("finallyStatement").innerHTML;
	x = document.getElementById("input1").value;
	try
	{
		if (x == "") throw "Empty";
		if (isNaN(x)) throw "Is Not A Number";
		if (x < 5) throw "Too Low";
		if (x > 10) throw "Too High";
	}
	catch(err)
	{
		document.getElementById("finallyStatement").innerHTML = "Input Is " + err;
	}
	finally
	{
		document.getElementById("input1").value = "";
	}
}
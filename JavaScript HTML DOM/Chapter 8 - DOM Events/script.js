function onClickEventUsingEventHandler(id)
{
	id.innerHTML = "Ooops!";
}
function eventAttribute()
{
	document.getElementById("eventAttribute").innerHTML = Date();
}
function eventsUsingDOM()
{
	document.getElementById("myBtn").onclick = displayDate();
	function displayDate()
	{
		document.getElementById("eventsUsingDOM").innerHTML = Date();
	}
}
function onLoadEvent()
{
	var text = "";
	if(navigator.cookieEnabled == true)
	{
		text = "Cookies Are Enabled";
	}
	else
	{
		text = "Cookies Are Not Enabled";
	}
	document.getElementById("onLoadEvent").innerHTML = text;
}
function onChangeEvent()
{
	var x = document.getElementById("onChangeEvent");
	x.value = x.value.toUpperCase();
}
function mOver(obj)
{
	obj.innerHTML = "Thank You";
	obj.style.color = "blue";
	obj.style.fontSize = "20px";
}
function mOut(obj)
{
	obj.innerHTML = "Mouse Over Me";
	obj.style.color = "green";
	obj.style.fontSize = "20px";
}
function mDown(obj)
{
	obj.innerHTML = "Release Me";
	obj.style.color = "blue";
	obj.style.fontSize = "20px";
}
function mUp(obj)
{
	obj.innerHTML = "Thank You!";
	obj.style.color = "green";
	obj.style.fontSize = "20px";
}
function animationUsingJavaScript()
{
	var elem = document.getElementById("animate");
	var position = 0;
	var id = setInterval(frame, 5);
	function frame()
	{
		if(position == 350)
		{
			clearInterval(id);
		}
		else
		{
			position++;
			elem.style.top = position + 'px';
			elem.style.left = position + 'px';
		}
	}
}
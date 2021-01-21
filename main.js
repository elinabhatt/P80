function getParagraph1()
	{
		var l = [];
		for(var a = 1 ; a <=6 ; a++)
		{
			l.push(document.getElementById("k" + a).value);
		}
	document.getElementById("p1").innerHTML = l.join(". ");
	}

	function getParagraph2()
	{
		var m = [];
		for(var b = 1 ; b <=6 ; b++)
		{
			m.push(document.getElementById("j" + b).value);
		}
	document.getElementById("p2").innerHTML = m.join(". ");
	}

function getV(n)
{
	document.getElementById("inp").value = document.getElementById("inp").value + n;
}

function clean()
{
	document.getElementById("inp").value = "";
	document.getElementById("inp").style.background = 'white';
}

function equal()
{
	var res = document.getElementById("inp").value;
	if(res)
	{
		document.getElementById("inp").value = eval(res);
		document.getElementById("inp").style.background = 'green';
	}
}
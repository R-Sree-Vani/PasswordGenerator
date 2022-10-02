var password=document.getElementById("password");
	function funcgen(){
		var chars="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";
		var plength=10;
		var password=" ";
		for(var i=0;i<=plength;i++)
		{
			var rnum=Math.floor(Math.random()*chars.length);
			password=password+chars.substring(rnum,rnum+1);
		}
		document.getElementById("password").value=password;
	}

	function funccopy(){
		var ctext=document.getElementById("password");
		ctext.select();
		document.execCommand("copy");
		 navigator.clipboard.writeText(ctext.value);
    alert("The password " + ctext.value + " has been copied!");
		
	}

	function funcclear(){
		document.getElementById("password").value="";
	}
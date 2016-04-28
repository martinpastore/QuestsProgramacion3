$(document).ready(function(){
	var req = new XMLHttpRequest();

	req.onreadystatechange = showContain;
	req.open('GET', 'http://api.icndb.com/jokes/random', true);
	req.send(null)


	function showContain(){
	if(req.readyState ==4){
		if(req.status==200){
			$("#ajax").html(req.responseText);
		}else if (req.status==404){
			$('section').addClass("error");
			//document.write("404 NOT FOUND");
		}else{
			$('section').addClass("error");
			//document.write("500 INTERNAL SERVER ERROR");			
		}
	}
	}
});
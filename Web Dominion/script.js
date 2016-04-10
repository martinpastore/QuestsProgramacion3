function copyText(){
	var texto1 = document.getElementById("txtUno").value;
	var texto2 = document.getElementById("txtDos").value;


	if(document.getElementById("txtDos").value == ''){
		$("#txtDos").val(texto1);
	}
	else if(document.getElementById("txtUno").value == ''){
		$("#txtUno").val(texto2);
	}
	if(texto1 == '' && texto2 == ''){
		document.getElementById("stat").value = "Please, write something";
	}
}	
var hash = function(texto){
	var mayus="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ"
	var minus="abcdefghyjklmnñopqrstuvwxyz";
	var cant = texto.length;
	var char = [];
	for(var i = 0; i < texto.length; i++){
		char[i] = texto.charAt(i);
		if(mayus.indexOf(char[i],0)!=-1){
			char[i].toLowerCase();
		}else{
			char[i].toUpperCase();
		}
		console.log(char[i]);
	}
}
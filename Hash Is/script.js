var hash = function(texto){
	var mayus="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ"
	var minus="abcdefghyjklmnñopqrstuvwxyz";
	var char = [];
	var textoRet = "";
	var extra = 0;
	var extraChar = "!#$%&(=)*¬@▼ô";
	var randomChar = "";
	for(var i = 0; i < texto.length; i++){
		char[i] = texto.charAt(i);
		if(mayus.indexOf(char[i],0)!=-1){
			char[i] = char[i].toLowerCase();
		}else{
			char[i] = char[i].toUpperCase();
		}	
		var rnum = Math.floor(Math.random() * extraChar.length);
		randomChar = extraChar.substring(rnum,rnum+1);				
			
		extra = Math.round(Math.random() * 9);
		textoRet += char[i] + extra + randomChar; 
	}	
	console.log(textoRet);
}

var hashOut = function(texto){
}
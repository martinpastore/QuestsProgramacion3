var mayus="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
var nums = "0123456789";
var simb = "#$@_-!";
var ch = [];

var pwd = function(password){
this.password = password;
};

pwd.prototype.validar = function(){
		if(this.password.length < 8){
			console.log("La contraseña tiene menos de 8 digitos");
		}else{
			this.valid1();
		}
	}
	
pwd.prototype.valid1 = function(){
var val = false;
		for(var i = 0; i<this.password.length; i++){
		ch[i] = this.password.charAt(i);
		if(mayus.indexOf(ch[i],0)!=-1){
			val = true;
			}
		}
		if(this.password.length > 8 && val === true){
			console.log("La contraseña contiene mayusculas y es mayor a 8 digitos. Es valida");
		}else{
			this.valid2();
		}
	}
pwd.prototype.valid2 = function(){
var val = false;
		for(var i = 0; i<this.password.length; i++){
		ch[i] = this.password.charAt(i);
		if(nums.indexOf(ch[i],0)!=-1){
			val = true;
			}
		}
		if(this.password.length > 8 && val === true){
			console.log("La contraseña contiene numeros y es mayor a 8 digitos. Es valida");
		}else{
			this.valid3();
		}
	}
	
pwd.prototype.valid3 = function(){
var val = false;
		for(var i = 0; i<this.password.length; i++){
		ch[i] = this.password.charAt(i);
		if(simb.indexOf(ch[i],0)!=-1){
			val = true;
			}
		}
		if(this.password.length > 8 && val === true){
			console.log("La contraseña contiene simbolos y es mayor a 8 digitos. Es valida");
	}
}
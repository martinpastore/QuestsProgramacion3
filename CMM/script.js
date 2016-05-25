function base(){
	this.siguiente = null;

	base.prototype.pasar = function(password){
		if(this.siguiente != null){
			this.siguiente.validate(password);
		}
	};
	base.prototype.validate = function(password){};
};

function corto(){
		this.validate = function(password){
		var corto = password.length < 3 ? console.log("Muy corto") : this.pasar(password);  
	}
};

corto.prototype = new base();

function largo(){
	this.validate = function(password){
	var largo = password.length > 10 ? console.log("Muy largo") : this.pasar(password); 
	}
};

largo.prototype = new base();

function mayus(){
	this.validate = function(password){
	var p = /[A-Z]/g;
	if(password.match(p)){
		this.pasar(password);
	}else{
		console.log("No tiene mayusculas");
		return;
	}
}
};

mayus.prototype = new base();

function nums(){
	this.validate = function(password){
	var p = /[0-9]/g;
	if(password.match(p)){
		this.pasar(password);
	}else{
		console.log("No tiene numeros");
		return;
	}
}
};

nums.prototype = new base();

var a = new corto();
var b = new largo();
var c = new mayus();
var d = new nums();

a.siguiente = b;
b.siguiente = c;
c.siguiente = d;

a.validate("Aabbb12");
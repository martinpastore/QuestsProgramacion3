/*Desarrollar un videojuego por consola con aliens y soldados, cada uno con 40 Puntos de Ataque
y 20 Puntos de Defensa, desarrollar un metodo para atacar a los aliens y que devuelva como resultado
el ganador y la cantidad restante de soldados y aliens vivos.*/ 


var game = (function(){
 this.soldado = [];
 this.alien = [];

	var alien = function(ap, dp){
		this.ap = ap;
		this.dp = dp;
	}
	var soldado = function(ap, dp){
		this.ap = ap;
		this.dp = dp;
	}

game.prototype.agregarSoldado = function(ap, dp, cantidad){
	for(var i = 0; i < cantidad; i++){
	var s = new soldado(ap,dp);
	this.soldado.push(s);
	}
}
game.prototype.agregarAlien = function(ap,dp, cantidad){
	for(var i = 0; i < cantidad; i++){
	var a = new alien(ap,dp);
	this.alien.push(a);
	}
}
game.prototype.fight = function(){
	for(var i = 0; i < this.soldado.length; i++){
	var rand = Math.round(Math.random());
		for(var j = 0; i < this.alien.length; i++){
			if(i === j && this.soldado[i].ap > this.alien[i].dp){
				this.alien.splice(i, 1);
				console.log(this.alien, this.soldado);
			}else if(i === j && this.soldado[i].ap < this.alien[i].dp){
				this.soldado.splice(i, 1);
				console.log(this.alien, this.soldado);
			}else if(i === j && this.soldado[i].ap == this.alien[i].dp){
				this.soldado.splice(i, 1);
				this.alien.splice(i, 1);
				console.log(this.alien, this.soldado);
			}else if(i < j && rand == 1 && this.soldado[i].ap > this.alien[i].dp){
				this.alien.splice(i, 1);
				console.log(this.alien, this.soldado);
			}else if(i < j && rand == 0){
				console.log("FAIL");
			}else if(i < j && rand == 1 && this.soldado[i].ap < this.alien[i].dp){
				this.soldado.splice(i, 1);
				console.log(this.alien, this.soldado);
			}else if(i < j && rand == 1 && this.soldado[i].ap == this.alien[i].dp){
				this.alien.splice(i, 1);
				this.soldado.splice(i, 1);
				console.log(this.alien, this.soldado);
			}else if(i > j && rand == 0 && this.soldado[i].ap > this.alien[i].dp){
				this.alien.splice(i, 1);
				console.log(this.alien, this.soldado);
			}else if(i < j && rand == 1){
				console.log("FAIL");
			}else if(i < j && rand == 0 && this.soldado[i].ap < this.alien[i].dp){
				this.soldado.splice(i, 1);
				console.log(this.alien, this.soldado);
			}else if(i < j && rand == 0 && this.soldado[i].ap == this.alien[i].dp){
				this.alien.splice(i, 1);
				this.soldado.splice(i, 1);
				console.log(this.alien, this.soldado);
			}
			if(this.alien.length == 0){
				return "Los soldados ganan";
			}else if(this.soldado.length == 0){
				return "Los aliens ganan";
			}else{
				return "Todavia quedan sobrevivientes";
			}
		}		
	}
	console.log(this.soldado, this.alien);
}
});

var g = new game();
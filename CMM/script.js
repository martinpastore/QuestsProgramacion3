var pwd = function(password){
	var tipoValidacion = 0;
	var ch = [];
	var mayus="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
	var minus="abcdefghijklmnñopqrstuvwxyz";
	var nums="0123456789";
	var simb = "!#$%&@";
	var hayMayus = false;
	var hayNums = false;
	var haySimb = false;
		
	for(var i = 0; i < password.length; i++){
		ch[i] = password.charAt(i);	
		if(mayus.indexOf(ch[i],0) != -1){
			 hayMayus = true;
		}else if(nums.indexOf(ch[i],0) != -1){
			 hayNums = true;
		}else if(simb.indexOf(ch[i],0) != -1){
			 haySimb = true;
		}
	}
	for(var i = 0; i < 1; i++){
		if(password.length < 8){
		console.log(validar(0, password));
		}else if(password.length >= 8 && !hayMayus && !hayNums && !haySimb){
		console.log(validar(1, password));
		}else if(password.length >= 8 && hayMayus && !hayNums && !haySimb){
		console.log(validar(2, password));
		}else if(password.length >= 8 && hayNums && !hayMayus && !haySimb){
		console.log(validar(3, password));
		}else if(password.length >= 8 && haySimb && !hayMayus && !hayNums){
		console.log(validar(4, password));
		}else if(password.length >= 8 && hayMayus && hayNums && !haySimb){
		console.log(validar(5,password));
		}else if(password.length >= 8 && hayMayus && hayNums && haySimb){
		console.log(validar(6,password));
		}
	};
	
	function validar(tipoValidacion, password){
		var c = 0;
			if(tipoValidacion === 0){
				return "La contraseña debe tener mas de 8 digitos";
			}else if(tipoValidacion === 1){
				return "La contraseña debe tener numeros o mayusculas o simbolos";
			}else if(tipoValidacion === 2){
			var seguridad
				for(var i = 0; i < password.length; i++){
					if(mayus.indexOf(ch[i],0) != -1){
						c++;
					}
				}
				if(c < 3){
					seguridad = "BAJA";
				}else if(c >= 3){
					seguridad = "MEDIA";
				}
				return "La contraseña es valida. Seguridad: " + seguridad;
			}else if(tipoValidacion === 3){
				var seguridad;
				for(var i = 0; i < password.length; i++){
					if(nums.indexOf(ch[i],0) != -1){
						c++;
					}
				}
				if(c < 3){
				seguridad = "BAJA";
				}else if(c >= 3){
				seguridad = "MEDIA";
				}
				return "La contraseña es valida. Seguridad: " + seguridad;
			}else if(tipoValidacion === 4){
				var seguridad;
				for(var i = 0; i < password.length; i++){
					if(simb.indexOf(ch[i],0) != -1){
						c++;
					}
				}
				if(c < 3){
				seguridad = "BAJA";
				}else if(c >= 3){
				seguridad = "MEDIA";
				}
				return "La contraseña es valida. Seguridad: " + seguridad;
			}else if(tipoValidacion === 5){
			var seguridad;
				for(var i = 0; i < password.length; i++){
					if(mayus.indexOf(ch[i],0) != -1 || nums.indexOf(ch[i],0) != -1){
						c++;
					}
				}
				if(c < 5){
				seguridad = "MEDIA";
				}else if(c >= 5){
				seguridad = "ALTA";
				}
				return "La contraseña es valida. Seguridad: " + seguridad;
			}else if(tipoValidacion === 6){
			var seguridad;
				for(var i = 0; i < password.length; i++){
					if(mayus.indexOf(ch[i],0) != -1 || nums.indexOf(ch[i],0) != -1 || simb.indexOf(ch[i],0) != -1){
						c++;
					}
				}
				if(c < 5){
				seguridad = "MEDIA";
				}else if(c >= 5){
				seguridad = "ALTA";
				}
				return "La contraseña es valida. Seguridad: " + seguridad;
			}
		};
};

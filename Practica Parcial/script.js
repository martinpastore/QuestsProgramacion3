/*Se requiere crear una clase Libro con propiedades: Titulo, Nombre Autor, Código del libro y Cantidad de páginas.
Se requiere crear una clase Biblioteca que pueda contener N cantidad de libros.
El objeto biblioteca debe incluír el método AgregarLibro, QuitarLibro y BuscarLibro
AgregarLibro crea un nuevo libro y lo incluye dentro de la biblioteca
QuitarLibro elimina un libro de la biblioteca
BuscarLibro busca el libro por Título o Código del libro y retorna ese libro*/

var Libro = function(titulo, autor, codigo, paginas){
 this.titulo = titulo;
 this.autor = autor;
 this.codigo = codigo;
 this.paginas = paginas;
}

var Biblioteca = function(){
	var lib = [];
	
	Biblioteca.prototype.agregarLibro = function(titulo, autor, codigo, paginas){
		var l = new Libro(titulo, autor, codigo, paginas);
		lib.push(l);
	}
	Biblioteca.prototype.quitarLibro = function(valor){
	for(var i = 0; i < lib.length; i++){
		if(valor === lib[i].codigo){
				lib.splice(i, 1);
			}
		}
	}
	Biblioteca.prototype.buscarLibro = function(valor){
		for(var i = 0; i < lib.length; i++){
			if(valor === lib[i].codigo || valor === lib[i].titulo){
				return lib[i];
			}
		}
	}
	console.log(lib);
}

//var l1 = new Libro("BLA BLA BLA", "R", 01, 250); Solo si paso como parametro libro a agregarLibro
//var l2 = new Libro("MANUAL DEL BLA", "T", 02, 200);

var b = new Biblioteca();
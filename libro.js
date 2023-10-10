class Libro {
    constructor (titulo, autor, genero,leido = false){
        this.autor = autor;
        this.genero = genero;
        this.leido = leido;
        this.titulo = titulo;
    }

    marcarComoLeido (){
        this.leido = true
        console.log("si")
    }
    marcarComoNoLeido (){
        this.leido = false
        console.log("no")
    }
    informacion(){
        console.log(`
      Título: ${this.titulo}
      Autor: ${this.autor}
      Genero: ${this.genero}
      leido: ${this.leido ? "si" : "no"}
    `);
    }
}

const libro1 = new Libro ("El señor de los anillos", "J.R.R. Tolkien", "Fantasía")
const libro2 = new Libro ("orgullo y prejuicio", "Jane Austen", "Romance")

libro1.informacion()
libro1.marcarComoLeido()
libro1.informacion()

libro2.informacion()
libro2.marcarComoNoLeido()
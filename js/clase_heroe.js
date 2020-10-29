/**
 * This is the super hero class, wich hold all the data realted to
 * an specific super hero. 
 */
class Heroe {

    constructor(nombre, salud, ataque, velocidad, frase, categoria) {
        this.imagen = new Image(); //agregar imagen
        this.nombre = nombre; //atributo
        this.salud = salud;
        this.ataque = ataque;
        this.velocidad = velocidad;
        this.frase = frase;
        this.categoria = categoria;

        this.imagen.src = imagenes[this.nombre]; //se agrega valor al atributo src de la instancia
        this.imagen.onClick = frase;
    }

    /**
     *  al estar en una clase, se omite "function"
     */
    hablar() {
        alert(this.frase)
    }

}
class Heroe //clase
{
    constructor(nombre, salud, ataque, velocidad, frase, categoria)
    {
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

    hablar() //al estar en una clase, se omite "function"
    {
        alert(this.frase); //metodo
    }

    mostrar()
    {
        let separadorDiv = document.createElement("div"); //agregar un div
        separadorDiv.setAttribute("class", "contenedor"); //agregar atributos al div
        separadorDiv.innerHTML += "<h3>" + this.nombre + "</h3>"; //agrega elementos al div generado en la variable
        //document.write("<h3>" + this.nombre + "</h3><br><br>");
        let imagenDiv = document.createElement("div");
        imagenDiv.setAttribute("class", "imagen");
        imagenDiv.appendChild(this.imagen);
        separadorDiv.appendChild(imagenDiv);
        //document.body.appendChild(this.imagen); //agregar objetos al documento "body" del HTML
        /* document.write(this.imagen); //Esto no funciona para imagenes, solo para texto */
        separadorDiv.innerHTML += "<p><br><b>Salud:</b> " + this.salud + "<br></p>";
        separadorDiv.innerHTML += "<p><b>Ataque:</b> " + this.ataque + "</p>";
        separadorDiv.innerHTML += ("<p><b>Velocidad:</b> " + this.velocidad + "</p>");
        separadorDiv.innerHTML += ("<p><b>Categoría:</b> " + this.categoria + "</p>");
        let boton = document.createElement("input");
        boton.setAttribute("type", "button");
        boton.setAttribute("id", this.nombre);
        boton.setAttribute("value", "Fight!");
        separadorDiv.appendChild(boton);
        document.body.appendChild(separadorDiv); //mostrar el div
    }


}
let imagenes = []; //array asociativo
imagenes["Iron Man"] = "img/iro.gif"; //Variables que guardan la ruta de imagen como si fuese un atributo
imagenes["Spider Man"] = "img/spi.gif";
imagenes["Captain America"] = "img/cap.gif";
imagenes["Cyclops"] = "img/cic.gif";
imagenes["Rogue"] = "img/rog.gif";
imagenes["Storm"] = "img/sto.gif";
imagenes["Cable"] = "img/cab.gif";
imagenes["Magneto"] = "img/mag.gif";
imagenes["Omega Red"] = "img/omg.gif";
imagenes["Wolverine"] = "img/wol.gif";
imagenes["War Machine"] = "img/war.gif";
imagenes["Psylocke"] = "img/psy.gif";
imagenes["Venom"] = "img/ven.gif";
imagenes["Hulk"] = "img/hul.gif";
imagenes["Juggernaut"] = "img/jug.gif";
imagenes["Colossus"] = "img/col.gif";
//imagenes["background"] = "img/map.png;";

/* let ironMan = new Heroe("Iron Man", 100, 30, "[• •]", "I'm Iron Man!", "Ingeniero"); //pasa por parametro los valores de la nueva instancia de la clase Heroe.
let spiderMan = new Heroe("Spider Man", 80, 20, "[• • • •]", "Look Out! Here Comes The Spiderman");
spiderMan.categoria = "Veloz";
let captain = new Heroe("Captain America", 90, 30, "[• • •]", "Thumbs Up Soldier!", "Táctico");

ironMan.mostrar(); //mostrar imagen mediante un método
spiderMan.mostrar();
captain.mostrar(); */

//--- Otra forma de hacerlo

let repertorio = [];
//arreglo.poner(instanciar clase(nombre, salud, ataque, velocidad, frase, categoría));
repertorio.push(new Heroe("Iron Man", 100, 30, "• • •", "I'm Iron Man!", "Héroe"));
repertorio.push(new Heroe("Spider Man", 80, 20, "• • • • •", "Look Out! Here Comes The Spiderman", "Héroe"));
repertorio.push(new Heroe("Captain America", 100, 30, "• • • •", "Thumbs Up Soldier!", "Héroe"));
repertorio.push(new Heroe("Cyclops", 80, 40, "• • ", "Dreams, Don't Die!", "Héroe"));
repertorio.push(new Heroe("Rogue", 60, 50, "• • •", "Guess you more bark than bite.", "Héroe"));
repertorio.push(new Heroe("Storm", 80, 40, "• • •", "You now face Storm of the X-Men.", "Héroe"));
repertorio.push(new Heroe("Cable", 100, 30, "• •", "Keep Moving, Old Man!", "Antihéroe"));
repertorio.push(new Heroe("Magneto", 120, 50, "• • •", "The time for subtlety is passing. Now is the time for change.", "Villano"));
repertorio.push(new Heroe("Omega Red", 80, 30, "• • •", "My coils will drain your life!", "Villano"));
repertorio.push(new Heroe("Wolverine", 200, 40, "• • •", "Let's go bub!", "Antihéroe"));
repertorio.push(new Heroe("War Machine", 100, 40, "• •", "Proton Cannon!", "Héroe"));
repertorio.push(new Heroe("Psylocke", 50, 60, "• • • •", "Your skills don't compare to mine!", "Héroe"));
repertorio.push(new Heroe("Venom", 100, 50, "• • • •", "We Are Venom!", "Villano"));
repertorio.push(new Heroe("Hulk", 200, 80, "•", "Hulk Smash!!!", "Héroe"));
repertorio.push(new Heroe("Juggernaut", 180, 70, "•", "I'am The Juggernaut, Bitch!", "Villano"));
repertorio.push(new Heroe("Colossus", 160, 60, "• •", "Four or five moments...\nFour or five moments - that's all it takes, to be a hero.\nEveryone thinks it's a full-time job. Wake up a hero. Brush your teeth a hero. Go to work a hero. Not true. Over a lifetime, there are only four or five moments that really matter. Moments when you're offered a choice - to make a sacrifice, conquer a flaw, save a friend, spare an enemy. In these moments, everything else falls away. The way the world sees us. The way we...\n\n[vomits humourously]  Why?! >:'v", "Héroe"));
//repertorio.push(new Heroe("Scarlet Witch", 60, 60, "• • •", "Thumbs Up Soldier!", "Táctico"));

let seleccionar;

for (let heroe of repertorio) //For especial para mostrar el contenido de un arreglo
{
    showFormatedOnScreen({
        ataque: heroe.ataque,
        category: heroe.categoria,
        nombre: heroe.nombre,
        salud: heroe.salud,
        velocidad: heroe.velocidad,
        imagen: heroe.imagen
    })
    seleccionar = document.getElementById(heroe.nombre);
    seleccionar.addEventListener("click", select);

    function select() {
        heroe.hablar();
    }
}


function showFormatedOnScreen({ nombre, salud, ataque, velocidad, category, imagen }) {
    let separadorDiv = document.createElement("div"); //agregar un div
    separadorDiv.setAttribute("class", "contenedor"); //agregar atributos al div
    separadorDiv.innerHTML += "<h3>" + nombre + "</h3>"; //agrega elementos al div generado en la variable
    //document.write("<h3>" + this.nombre + "</h3><br><br>");
    let imagenDiv = document.createElement("div");
    imagenDiv.setAttribute("class", "imagen");
    imagenDiv.appendChild(imagen);
    separadorDiv.appendChild(imagenDiv);
    //document.body.appendChild(this.imagen); //agregar objetos al documento "body" del HTML
    /* document.write(this.imagen); //Esto no funciona para imagenes, solo para texto */
    separadorDiv.innerHTML += "<p><br><b>Salud:</b> " + salud + "<br></p>";
    separadorDiv.innerHTML += "<p><b>Ataque:</b> " + ataque + "</p>";
    separadorDiv.innerHTML += ("<p><b>Velocidad:</b> " + velocidad + "</p>");
    separadorDiv.innerHTML += ("<p><b>Categoría:</b> " + category + "</p>");
    let boton = document.createElement("input");
    boton.setAttribute("type", "button");
    boton.setAttribute("id", nombre);
    boton.setAttribute("value", "Fight!");
    separadorDiv.appendChild(boton);
    document.body.appendChild(separadorDiv);
}
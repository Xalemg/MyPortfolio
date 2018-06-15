//ARCHIVO ENCARGADO DE GESTIONAR LAS ANIMACIONES DE LOSICONOS DE HABILIDAD


//Inicializa los objetos con la informacion de las habilidades
var php = new Lenguaje ("Php","php", 25 , "Conocimientos básicos");
var css = new Lenguaje ("Css", "css", 95, "Conocimientos avanzados");
var sass = new Lenguaje ("Sass", "sass", 68 , "Conocimientos inermedios");
var java = new Lenguaje ("Java","java", 85 , "Conocimientos avanzados");
var unity = new Lenguaje ("Unity","unity", 45 , "Conocimientos intermedios");
var cSharp = new Lenguaje ("C#","cSharp", 30 , "Conocimientos básicos");
var android = new Lenguaje ("Android","android", 70 , "Conocimientos intermedios");
var javascript = new Lenguaje ("Javascript","js", 65 , "Conocimientos intermedios");

var habilidades = [php, css, sass, java, unity, cSharp, android, javascript];

//Añade listeners a los iconos al cargar la pagina
window.onload = addListener(habilidades.id);


function addListener() {
    for (var i=0;i<habilidades.length; i++){
        let miIcono = habilidades[i].id;
        let porcentaje = habilidades[i].habilidad;
        let nombre = habilidades[i].nombre;
        let descripcion = habilidades[i].descripcion;
        document.getElementById(habilidades[i].id).addEventListener("click", function(){addAnimations(miIcono, porcentaje, nombre, descripcion)});
    }
}
/*Función principal encargada de realizar las animaciones y modificaciones 
necesarias cuando el usuario hace click en un icono */

function addAnimations(id, porcentaje, nombre, descripcion) {
    animateHuecoElegido (id, randomAnimationElegido());
    animateGridIcons (id, randomAnimationGrid());
    animateBar (porcentaje);
    changeDescription(nombre, descripcion);
}

//Funcion encargada de manejar adecuadamente la animacion de los iconos del grid
function animateGridIcons (nombre, animacion) {
    let iconoGrid = document.getElementById(nombre);
    iconoGrid.style.pointerEvents = "none";
    iconoGrid.classList.add(animacion);
 //Esperamos que acabe la animacion para borrar la clase de la animación
 setTimeout(function(){
    iconoGrid.classList.remove(animacion);
    iconoGrid.style.pointerEvents = "auto";
    }, 1200);
}
//Funcion encargada de manejar adecuadamente la animacion del icono del grid
function animateHuecoElegido (nombre, animacion) {
    let elegido = document.getElementById("icono-Elejido");
    elegido.src="img/"+ nombre.toString() +"-hex.png";
    elegido.classList.add(animacion);
    //esperamos que acabe la animacion para borrar la clase de la animación
    setTimeout(function(){
        elegido.classList.remove(animacion);
    }, 1200);
}

//Elige aleatoriamente la animacion a realizar en el grid
function randomAnimationGrid(){
    let i = getRandomInt(0, 4);
    let animaciones = ["shake", "jello","rubberBand", "tada"];
    return animaciones[i];
}

//Elige aleatoriamente la animacion a realizar en el selector
function randomAnimationElegido(){
    let i = getRandomInt(0, 5);
    let animaciones = ["jackInTheBox", "fadeIn", "rotateIn","zoomIn", "flipInX",];
    return animaciones[i];
}
//Genera numeros enteros aleatorios equiprovables entre min y max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
//Anima la barra de habilidad segun el porcentaje introducido
function animateBar(porcentaje) {
    let barra = document.getElementById("seccion");
    let color;
   if(porcentaje <= 31) color = "#208222";
   else if(porcentaje <= 50) color = "#207822";
   else if(porcentaje <= 70) color = "#20aa22";
   else color = "#20c822";
    setTimeout(function(){
        barra.style.width = porcentaje.toString() + "%";
        barra.style.backgroundColor = color;
    }, 600);
}

//Anima el cambio de texto de la descripcion de las habilidades
function changeDescription(nombre, description){
    let pageTittle =document.getElementById("tituloHabilidad");
    let pageDesc = document.getElementById("descripcion");
    pageTittle.innerHTML = nombre;
    pageDesc.innerHTML = description;
    pageTittle.style.marginRight = "0.6em";
    
}

//Cambia el texto al pulsar en un icono

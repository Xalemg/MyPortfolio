//ARCHIVO ENCARGADO DE GESTIONAR LAS ANIMACIONES DE LOSICONOS DE HABILIDAD


//Ids en HTML de los iconos a animar
var nombresIconos = ["php", "css", "sass", "java", "unity", "cSharp", "android", "js"];
//Añade listeners a los iconos al cargar la pagina
window.onload = addListener(nombresIconos);


function addListener() {
    for (var i=0;i<nombresIconos.length; i++){
        let miIcono = nombresIconos[i];
        document.getElementById(miIcono).addEventListener("click", function(){addIconAnimation(miIcono)});
    }
}
//Función encargada de animar los iconos del grid y de los seleccionados
function addIconAnimation(nombre) {
    console.log("Icono clickado: " + nombre);

    animateHuecoElegido (nombre, randomAnimationElegido());
    animateGridIcons (nombre, randomAnimationGrid());
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
    console.log(animacion);
    elegido.classList.add(animacion);
    //esperamos que acabe la animacion para borrar la clase de la animación
    setTimeout(function(){
        elegido.classList.remove(animacion);
    }, 1200);
}

//Elige aleatoriamente la animacion a realizar en el grid
function randomAnimationGrid(){
    let i = getRandomInt(0, 3);
    let animaciones = ["rotate-center", "rotate-center-reverse", "rotate-hor-center"];
    return animaciones[i];
}

//Elige aleatoriamente la animacion a realizar en el selector
function randomAnimationElegido(){
    let i = getRandomInt(0, 4);
    let animaciones = ["jackInTheBox", "fadeIn", "rotateIn","zoomIn", "flipInX"];
    return animaciones[i];
}
//Genera numeros enteros aleatorios equiprovables entre min y max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

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
//Añade la clase necesaria para generar la animación
function addIconAnimation(nombre) {
    document.getElementById(nombre).classList.add("flip-vertical-right");
    document.getElementById("icono-Elejido").src="img/"+ nombre+"-hex.png";
    console.log("you clicked the icon " + nombre);
}

'use strict';
const entradasMenu = ["sobreMi", "habilidades", "educacion", "experiencia", "contacto"]

//Mueve la pagina al id pasado con animacion smooth
function moveMeTo (etiqueta) {
    console.log(document.getElementsByClassName(etiqueta)[0]);
document.getElementsByClassName(etiqueta)[0].scrollIntoView({behavior: "smooth"});
}
//Adjuntar listener a las entradas del menu
for ( var i = 0; i<entradasMenu.length; i++) {
document.getElementById(entradasMenu[i]).firstChild.onclick = moveMeTo((entradasMenu[i]));
}

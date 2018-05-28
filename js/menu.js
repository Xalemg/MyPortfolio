
/*Control del scroll cuando se abre y se cierra el menu */

/*DESHABILITA EL SCROLL CUANDO SE ABRE EL MENU A PANTALLA COMPLETA */

/*FUNCIONES PARA MANEJAR EL SCROLL DEL MENU */

//Sobre mi
function scrollSobreMi() {
    var elem = document.getElementsByClassName("sobreMi")[0];
    console.log(elem);
    elem.scrollIntoView({block: "start", behavior: "smooth"});
}
//Habilidades
function scrollHabilidades() {
    var elem = document.getElementsByClassName("habilidades")[0];
    console.log(elem);
    elem.scrollIntoView({block: "start", behavior: "smooth"});
}
//Educación
function scrollEducacion() {
    var elem = document.getElementsByClassName("educacion")[0];
    console.log(elem);
    elem.scrollIntoView({block: "start", behavior: "smooth"});
}

//Experiencia 
function scrollExperiencia() {
    var elem = document.getElementsByClassName("experiencia")[0];
    console.log(elem);
    elem.scrollIntoView({block: "start", behavior: "smooth"});
}

//Contacto
function scrollContacto() {
    var elem = document.getElementsByClassName("contacto")[0];
    console.log(elem);
    elem.scrollIntoView({block: "start", behavior: "smooth"});
}

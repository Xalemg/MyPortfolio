/* CIERRA ATOMATICAMENTE EL MENU AL HACER CLICK SOBRE UN ELEMENTO*/

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

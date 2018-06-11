/* CIERRA ATOMATICAMENTE EL MENU AL HACER CLICK SOBRE UN ELEMENTO*/

//Función que comprueba si se esta en moviles o tablet para cerrar el menu al hacer click
function closeMenu() {
    var element = document.getElementsByClassName("tcon")[0];
    var isVisible = (element.style.display != "none");
    var display= element.currentStyle ? element.currentStyle.display :
     getComputedStyle(element, null).display;
    if (display==='flex') {
        document.getElementsByClassName("tcon")[0].click();
    }
    }
//Sobre mi
function scrollSobreMi() {
    closeMenu();
    var elem = document.getElementsByClassName("sobreMi")[0];
    elem.scrollIntoView({block: "start", behavior: "smooth"});
}
//Habilidades
function scrollHabilidades() {
    closeMenu();
    var elem = document.getElementsByClassName("habilidades")[0];
    elem.scrollIntoView({block: "start", behavior: "smooth"});
}
//Educación
function scrollEducacion() {
    closeMenu();
    var elem = document.getElementsByClassName("educacion")[0];
    elem.scrollIntoView({block: "start", behavior: "smooth"});
}

//Experiencia 
function scrollExperiencia() {
    closeMenu();
    var elem = document.getElementsByClassName("experiencia")[0];
    elem.scrollIntoView({block: "start", behavior: "smooth"});
}

//Contacto
function scrollContacto() {
    closeMenu();
    var elem = document.getElementsByClassName("contacto")[0];
    elem.scrollIntoView({block: "start", behavior: "smooth"});
}
function downloadCV() {
    closeMenu();
    var pdf = "../curriculum.pdf";
    window.open(pdf);
    return false;
}

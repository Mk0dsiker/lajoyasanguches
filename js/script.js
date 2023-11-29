function menuOn() {
    var menu = document.querySelector(".menu");
    menu.style.transform = "none";
    document.querySelector('body').classList.add('menu-on');
        
    
}

function menuOff() {
    var menu = document.querySelector(".menu");
    menu.style.transform = "translateX(100%)";
    document.querySelector('body').classList.remove('menu-on');
    
    
}

function mostrar_pagina(element) {
    select = element.innerText;
    console.log(select);
    if(select == "Para compartir"){
        console.log("Para compartir fue elegido");
    }
}
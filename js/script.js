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

var idioma = 0; /* 0 = español, 1 = ingles */

function cambiar_idioma_ingles(){
    document.querySelector(".categories").innerHTML = `<li><a href="index.html" target="_self">Home</a></li>
    <li><a href="toshare.html" target="_self">To Share</a></li>
    <li><a href="burger.html" target="_self">Burgers</a></li>
    <li><a href="veggie.html" target="_self">Veggie</a></li>
    <li><a href="sanguches.html" target="_self">Sandwish</a></li>
    <li><a href="plates.html" target="_self">Plates</a></li>
    <li><a href="salads.html" target="_self">Salads</a></li>
    <li><a href="postres.html" target="_self">Desert</a></li>`

    document.querySelector(".en").style = "background-color: black;"
    document.querySelector(".es").style = "background-color: #ffbe00;"

    idioma = 1;
    console.log("Idioma actual: Ingles");
    
}

function cambiar_idioma_español(){
    document.querySelector(".categories").innerHTML =`<li><a href="index.html" target="_self">Home</a></li>
    <li><a href="toshare.html" target="_self">Para compartir</a></li>
    <li><a href="burger.html" target="_self">Hamburguesas</a></li>
    <li><a href="veggie.html" target="_self">Veggie</a></li>
    <li><a href="sanguches.html" target="_self">Sanguches</a></li>
    <li><a href="plates.html" target="_self">Platos</a></li>
    <li><a href="salads.html" target="_self">Ensaladas</a></li>
    <li><a href="postres.html" target="_self">Postres</a></li>`

    document.querySelector(".es").style = "background-color: black;"
    document.querySelector(".en").style = "background-color: #ffbe00;"

    idioma = 0;
    console.log("Idioma actual: Español ");
}

if(idioma == 0){
    cambiar_idioma_español();
} else if(idioma == 1){
    cambiar_idioma_ingles();
}
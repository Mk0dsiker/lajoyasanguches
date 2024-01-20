
function menuOn() {
    // Funcion que activa el menu lateral
    let menu = document.querySelector(".menu");
    menu.style.transform = "none";
    document.querySelector('body').classList.add('menu-on');
    
    //Seleccionamos el header y quitamos el el checkbox
    //de comida y tragos cuando abre menu lateral.
    let toggle = document.querySelector("#toggle_carta");
    let id = toggle.checked;
    if(id == true){
        let header = document.querySelector(".header");
        header.innerHTML = `
        <a class="logo_index" href="index.html" target="_self"><img src="assets/img/logo_white_green.png" alt="logo white png"></a>
        <div class="menu_icon" type="button"><img src="assets/icons/menu_icon_green.png" alt="menu icon" onclick="menuOn()"></div>`
    } else {
        let header = document.querySelector(".header");
        header.innerHTML = `
        <a class="logo_index" href="index.html" target="_self"><img src="assets/img/logo_white.png" alt="logo white png"></a>
        <div class="menu_icon" type="button"><img src="assets/icons/menu_icon.png" alt="menu icon" onclick="menuOn()"></div>`
        }

    
}

function menuOff() {
    let menu = document.querySelector(".menu");
    menu.style.transform = "translateX(100%)";
    document.querySelector('body').classList.remove('menu-on');

    //Seleccionamos el header y añadimos el el checkbox
    // de comida y tragos cuando cierra menu lateral.
    let toggle2 = document.querySelector("#toggle_carta2");
    let id = toggle2.checked;
    if(id == true){
    let header = document.querySelector(".header");
    header.innerHTML = `
    <a class="logo_index" href="index.html" target="_self"><img src="assets/img/logo_white_green.png" alt="logo white png"></a>
    <div class="checkbox-wrapper-34" id="toggle">
                <input class='tgl tgl-ios' id='toggle_carta' type='checkbox' onchange="changeMenu()" checked>
                <label class='tgl-btn' for='toggle_carta'></label>
            </div>
    <div class="menu_icon" type="button"><img src="assets/icons/menu_icon_green.png" alt="menu icon" onclick="menuOn()"></div>`
    } else {
        let header = document.querySelector(".header");
        header.innerHTML = `
        <a class="logo_index" href="index.html" target="_self"><img src="assets/img/logo_white.png" alt="logo white png"></a>
        <div class="checkbox-wrapper-34" id="toggle">
                <input class='tgl tgl-ios' id='toggle_carta' type='checkbox' onchange="changeMenu()">
                <label class='tgl-btn' for='toggle_carta'></label>
            </div>
        <div class="menu_icon" type="button"><img src="assets/icons/menu_icon.png" alt="menu icon" onclick="menuOn()"></div>`
    }  
}


// Sistema de navegacion por scrollintoView
function myFunction(element) {
    
    
    console.log(element.innerText);
    if(element.innerText == "Inicio"){
        let toggle2 = document.querySelector("#toggle_carta2");
        console.log(toggle2);
        let id = toggle2.checked;
        if (id == true) {
        let container = document.getElementById("index_coctel");
        container.scrollIntoView(); 
        } else {
            container = document.getElementById("index");
            container.scrollIntoView(); 
        }        

    } else if(element.innerText == "Para compartir"){
        container = document.getElementById("toshare");
        container.scrollIntoView();
    } else if(element.innerText == "Hamburguesas"){
        container = document.getElementById("burgers");
        container.scrollIntoView();
    } else if(element.innerText == "Veggie"){
        container = document.getElementById("veggie");
        container.scrollIntoView();
    } else if(element.innerText == "Sanguches"){
        container = document.getElementById("sanguches");
        container.scrollIntoView();
    } else if(element.innerText == "Platos"){
        container = document.getElementById("plates");
        container.scrollIntoView();
    } else if(element.innerText == "Ensaladas"){
        container = document.getElementById("salads");
        container.scrollIntoView();
    } else if(element.innerText == "Postres"){
        container = document.getElementById("postres");
        container.scrollIntoView();
    } else if(element.innerText == "Cantina Joya"){
        container = document.getElementById("coctel");
        container.scrollIntoView();
    } else if(element.innerText == "Jarras/Sours"){
        container = document.getElementById("jarnsour");
        container.scrollIntoView();
    } else if(element.innerText == "Mojito/Spritz"){
        container = document.getElementById("mojitonfizz");
        container.scrollIntoView();
    } else if(element.innerText == "Mules/Clasicos"){
        container = document.getElementById("mulenclassic");
        container.scrollIntoView();
    } else if(element.innerText == "Shops/Cervezas"){
        container = document.getElementById("shopnbeer");
        container.scrollIntoView();
    } else if(element.innerText == "Vinos"){
        container = document.getElementById("wine");
        container.scrollIntoView();    
    }
}


// Funcion que cambia a los colores cuando carta tragos es seleccionada.
function changetoDrink() {

    let menu = document.querySelector(".menu");
    menu.style.backgroundColor = "#00724d";

    let categories = document.querySelector(".categories");
    // console.log(categories);
    categories.innerHTML = `
    <button class="btn" onclick="myFunction(this)">Inicio</button>
    <button class="btn" onclick="myFunction(this)">Cantina Joya</button>
    <button class="btn" onclick="myFunction(this)">Jarras/Sours</button>
    <button class="btn" onclick="myFunction(this)">Mojito/Spritz</button>
    <button class="btn" onclick="myFunction(this)">Mules/Clasicos</button>
    <button class="btn" onclick="myFunction(this)">Shops/Cervezas</button>
    <button class="btn" onclick="myFunction(this)">Vinos</button>`;

    let header = document.querySelector(".header");
    header.style.borderBottom = "4px solid #00724d"
    let icon_menu = document.querySelector(".menu_icon");
    icon_menu.innerHTML = `<img src="assets/icons/menu_icon_green.png" alt="menu icon" onclick="menuOn()">`
    let logo_index = document.querySelector(".logo_index");
    logo_index.innerHTML = `<img src="assets/img/logo_white_green.png" alt="logo white png">`;
    
}

function changetoFood() {

    let menu = document.querySelector(".menu");
    menu.style.backgroundColor = "#feb000";

    let categories = document.querySelector(".categories");
    // console.log(categories);
    categories.innerHTML = `
    <button class="btn" onclick="myFunction(this)">Inicio</button>
    <button class="btn" onclick="myFunction(this)">Para compartir</button>
    <button class="btn" onclick="myFunction(this)">Hamburguesas</button>
    <button class="btn" onclick="myFunction(this)">Veggie</button>
    <button class="btn" onclick="myFunction(this)">Sanguches</button>
    <button class="btn" onclick="myFunction(this)">Platos</button>
    <button class="btn" onclick="myFunction(this)">Ensaladas</button>
    <button class="btn" onclick="myFunction(this)">Postres</button>`;


    let header = document.querySelector(".header");
    header.style.borderBottom = "4px solid #feb000"
    let icon_menu = document.querySelector(".menu_icon");
    icon_menu.innerHTML = `<img src="assets/icons/menu_icon.png" alt="menu icon" onclick="menuOn()">`
    let logo_index = document.querySelector(".logo_index");
    logo_index.innerHTML = `<img src="assets/img/logo_white.png" alt="logo white png">`;
}

function changeMenu() {
    let toggle = document.querySelector("#toggle_carta");
    let id = toggle.checked;
        if(id == true) {
            let carta = document.getElementById("index_coctel");
            carta.scrollIntoView();
            changetoDrink();
            document.querySelector("#toggle_carta2").checked = true;            
        } else {
            let carta = document.getElementById("index");
            carta.scrollIntoView();
            changetoFood();
            document.querySelector("#toggle_carta2").checked = false; 
        }
}

function changeMenu2() {
    let toggle2 = document.querySelector("#toggle_carta2");
    let id = toggle2.checked;
        if(id == true) {
            let carta = document.getElementById("index_coctel");
            carta.scrollIntoView();
            changetoDrink();
        } else {
            let carta = document.getElementById("index");
            carta.scrollIntoView();
            changetoFood();
        }        
}

var someElement = document.querySelector('#postres');

window.onscroll = function() {
    //TOP
    if(someElement.getBoundingClientRect().top <= 0){
        // console.log("TRIGGER: top of div reached.");
        
        changetoFood();
        document.getElementById("toggle_carta").checked = false;
        document.getElementById("toggle_carta2").checked = false;     

    }
    //BOTTOM
    
    if(someElement.getBoundingClientRect().bottom <= 0){
        // console.log("TRIGGER: bottom of div reached.");

        changetoDrink();
        document.getElementById("toggle_carta").checked = true;
        document.getElementById("toggle_carta2").checked = true;
    }
}
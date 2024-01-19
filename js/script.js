function menuOn() {
    var menu = document.querySelector(".menu");
    menu.style.transform = "none";
    document.querySelector('body').classList.add('menu-on');  

    let header = document.querySelector(".header");

    let id = toggle_carta.checked;
    if (id ==true){    
        header.innerHTML = `
        <a class="logo_index" href="index.html" target="_self"><img src="assets/img/logo_white_green.png" alt="logo white png"></a>
        <div class="menu_icon" type="button"><img src="assets/icons/menu_icon_green.png" alt="menu icon" onclick="menuOn()"></div>`;
    } else {
        header.innerHTML = `
    <a class="logo_index" href="index.html" target="_self"><img src="assets/img/logo_white.png" alt="logo white png"></a>
    <div class="menu_icon" type="button"><img src="assets/icons/menu_icon.png" alt="menu icon" onclick="menuOn()"></div>`;
    }
}

function menuOff() {
    var menu = document.querySelector(".menu");
    menu.style.transform = "translateX(100%)";
    document.querySelector('body').classList.remove('menu-on');

    let header = document.querySelector(".header");
    header.innerHTML = `
    <a class="logo_index" href="index.html" target="_self"><img src="assets/img/logo_white.png" alt="logo white png"></a>
    <div class="checkbox-wrapper-34">
        <input class='tgl tgl-ios' id='toggle_carta' type='checkbox' onchange="changeMenu()">
        <label class='tgl-btn' for='toggle_carta'></label>
    </div>
    <div class="menu_icon" type="button"><img src="assets/icons/menu_icon.png" alt="menu icon" onclick="menuOn()"></div>`
    
    let id = toggle_carta2.checked;
        if(id == true) {
        header.innerHTML = `
        <a class="logo_index" href="index.html" target="_self"><img src="assets/img/logo_white_green.png" alt="logo white png"></a>
        <div class="checkbox-wrapper-34">
            <input class='tgl tgl-ios' id='toggle_carta' type='checkbox' onchange="changeMenu()" checked>
            <label class='tgl-btn' for='toggle_carta'></label>
        </div>
        <div class="menu_icon" type="button"><img src="assets/icons/menu_icon_green.png" alt="menu icon" onclick="menuOn()"></div>`
    }
    
}

function headerOn(){
    let header = document.querySelector(".header");
    header.style.transform = "translateY(0)";     

    header2Off();
}

function header2On(){
    let header2 = document.querySelector(".header2");
    header2.style.transform = "translateY(0)";
}

function headerOff(){
    let header = document.querySelector(".header");
    header.style.transform = "translateY(-100%)";
}

function header2Off(){
    let header2 = document.querySelector(".header2");
    header2.style.transform = "translateY(-100%)";
}

window.onload = header2Off();


function myFunction(element) {
    
    // let li = document.querySelector(".li").innerText;
    console.log(element.innerText);
    let container = null;
    if(element.innerText == "Inicio"){
        container = document.getElementById("index");
        container.scrollIntoView();       
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
    menuOff();
    headerOff();
    header2On();
}

function changetoGreen() {
    let menu = document.querySelector(".menu");
    console.log(menu);
    menu.style.backgroundColor = "green";


    let categories = document.querySelector(".categories");
    console.log(categories);
    categories.innerHTML = `
    <button class="btn" onclick="myFunction(this)">Inicio</button>
    <button class="btn" onclick="myFunction(this)">Cantina Joya</button>
    <button class="btn" onclick="myFunction(this)">Jarras/Sours</button>
    <button class="btn" onclick="myFunction(this)">Mojito/Spritz</button>
    <button class="btn" onclick="myFunction(this)">Mules/Clasicos</button>
    <button class="btn" onclick="myFunction(this)">Shops/Cervezas</button>
    <button class="btn" onclick="myFunction(this)">Vinos</button>`;


    let header = document.querySelector(".header");
    header.style.borderBottom = "4px solid green"
    let icon_menu = document.querySelector(".menu_icon");
    icon_menu.innerHTML = `<img src="assets/icons/menu_icon_green.png" alt="menu icon" onclick="menuOn()">`
    let logo_index = document.querySelector(".logo_index");
    logo_index.innerHTML = `<img src="assets/img/logo_white_green.png" alt="logo white png">`;
    
}

function changetoYellow() {
    let menu = document.querySelector(".menu");
    console.log(menu);
    menu.style.backgroundColor = "#feb000";

    let categories = document.querySelector(".categories");
    console.log(categories);
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
    let id = toggle_carta.checked;
        if(id == true) {
            let carta = document.getElementById("index_coctel");
            carta.scrollIntoView();
            changetoGreen();

            let toggle2 = document.querySelector("#toggle2");
            toggle2.innerHTML = `<input class='tgl tgl-ios' id='toggle_carta2' type='checkbox' onchange="changeMenu2()" checked>
            <label class='tgl-btn' for='toggle_carta2'></label>`
        } else {
            let carta = document.getElementById("index");
            carta.scrollIntoView();
            changetoYellow();

            let toggle2 = document.querySelector("#toggle2");
            toggle2.innerHTML = `<input class='tgl tgl-ios' id='toggle_carta2' type='checkbox' onchange="changeMenu2()">
            <label class='tgl-btn' for='toggle_carta2'></label>`
        }
}

function changeMenu2() {
    let id = toggle_carta2.checked;
        if(id == true) {
            let carta = document.getElementById("index_coctel");
            carta.scrollIntoView();
            changetoGreen();
        } else {
            let carta = document.getElementById("index");
            carta.scrollIntoView();
            changetoYellow();

            let toggle = document.querySelector("#toggle2");
        toggle.innerHTML = `<input class='tgl tgl-ios' id='toggle_carta2' type='checkbox' onchange="changeMenu2()">
        <label class='tgl-btn' for='toggle_carta2'></label>`
        }

        
}


// var check = document.querySelector(".check");
// check.addEventListener('click', idioma);

// function idioma() {
//     let nameValue = "";
//     let namePage = document.querySelector("title").innerText
//     console.log(namePage);

//     if(namePage == "Inicio" || namePage == "Home"){
//         nameValue = "index";
//     } else if(namePage == "Coctel" || namePage == "Cocktail"){
//         nameValue = "index2";
//     } else if(namePage == "Para Compartir" || namePage == "To Share"){
//         nameValue = "toshare";
//     } else if(namePage == "Cantina" || namePage == "Canteen"){
//         nameValue = "cantina";             
//     } else if(namePage == "Hamburguesas" || namePage == "Burgers"){
//         nameValue = "burger";
//     } else if(namePage == "Jarras y Sours" || namePage == "Jars and Sours"){
//         nameValue = "jarnsour";             
//     } else if(namePage == "Veggie"){
//         nameValue = "veggie";
//     } else if(namePage == "Mojitos, Spritz y Fizz" || namePage == "Mojitos, Spritz and Fizz"){
//         nameValue = "mojitonfizz";
//     } else if(namePage == "Sanguches" || namePage == "Sandwishes"){
//         nameValue = "sanguches";
//     } else if(namePage == "Mules y Coctelería Clásica" || namePage == "Mules and Classics Cocktails"){
//         nameValue = "mulenclassic";
//     } else if(namePage == "Platos" || namePage == "Main courses"){
//         nameValue = "plates";
//     } else if(namePage == "Shops y Cervezas" || namePage == "Shops and Beers"){
//         nameValue = "shopnbeer";
//     } else if(namePage == "Ensaladas" || namePage == "Salads"){
//         nameValue = "salads";
//     } else if(namePage == "Destilados" || namePage == "Spirits"){
//         nameValue = "destiled";
//     } else if(namePage == "Postres" || namePage == "Desserts"){
//         nameValue = "postres";
//     } else if(namePage == "Vinos y Espumosos" || namePage == "Wines and Sparklings"){
//         nameValue = "wine";
//     }


//     let id = check.checked;
//     if(id == true){
//         // location.href = "en/toshare.html"
//         location.href = `en/${nameValue}.html`
//     } else {
//         location.href = `../${nameValue}.html`
//     }
// }

// var checkm = document.querySelector(".checkm");
// checkm.addEventListener('click', cambiarmenu);

// function cambiarmenu() {
//     let id = checkm.checked;
//     if(id == true){
//         // location.href = "en/toshare.html"
//         location.href = `index2.html`
//     } else {
//         location.href = `index.html`
//     }
// }
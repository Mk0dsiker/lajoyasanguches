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

var check = document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma() {
    let nameValue = "";
    let namePage = document.querySelector("title").innerText
    console.log(namePage);


    if(namePage == "Inicio" || namePage == "Home"){
        nameValue = "index";
    } else if(namePage == "Para Compartir" || namePage == "To Share"){
        nameValue = "toshare";
    } else if(namePage == "Hamburguesas" || namePage == "Burgers"){
        nameValue = "burger";
    } else if(namePage == "Veggie"){
        nameValue = "veggie";
    } else if(namePage == "Sanguches" || namePage == "Sandwishes"){
        nameValue = "sanguches";
    } else if(namePage == "Platos" || namePage == "Main courses"){
        nameValue = "plates";
    } else if(namePage == "Ensaladas" || namePage == "Salads"){
        nameValue = "salads";
    } else if(namePage == "Postres" || namePage == "Desserts"){
        nameValue = "postres";
    }


    let id = check.checked;
    if(id == true){
        // location.href = "en/toshare.html"
        location.href = `en/${nameValue}.html`
    } else {
        location.href = `../${nameValue}.html`
    }
}

var check = document.querySelector(".checkm");
check.addEventListener('click', tipocarta);

function tipocarta() {   
    var checkm = document.querySelector(".checkm");

    let id = checkm.checked;

    if(id == true){
    console.log("boton activado");
    location.href = `index2.html`
    } else {
    console.log("boton desactivado");
    location.href = `index.html`
    }
}

// function atragos(){
//     var menu = document.querySelector(".menu").style.backgroundColor = "green";
//     var categories = document.querySelector(".categories").innerHTML = (`<li><a href="index.html" target="_self">Inicio</a></li>
//     <li><a href="cantina.html" target="_self">Cantina Joya</a></li>
//     <li><a href="#" target="_self">Jarras/Sour</a></li>
//     <li><a href="#" target="_self">Mojitos/Spritz</a></li>
//     <li><a href="#" target="_self">Mules/Clasicos</a></li>
//     <li><a href="#" target="_self">Shops/Cervezas</a></li>
//     <li><a href="#" target="_self">Destilados</a></li>
//     <li><a href="#" target="_self">Vinos/Espumosos</a></li>`);
// }

// function acomida(){
//     console.log("boton desactivado")
//     var menu = document.querySelector(".menu").style.backgroundColor = "#feb000";
//     var categories = document.querySelector(".categories").innerHTML = (`<li><a href="index.html" target="_self">Inicio</a></li>
//     <li><a href="toshare.html" target="_self">Para compartir</a></li>
//     <li><a href="burger.html" target="_self">Hamburguesas</a></li>
//     <li><a href="veggie.html" target="_self">Veggie</a></li>
//     <li><a href="sanguches.html" target="_self">Sanguches</a></li>
//     <li><a href="plates.html" target="_self">Platos</a></li>
//     <li><a href="salads.html" target="_self">Ensaladas</a></li>
//     <li><a href="postres.html" target="_self">Postres</a></li>`);
// }
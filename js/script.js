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
    } else if(namePage == "Coctel" || namePage == "Cocktail"){
        nameValue = "index2";
    } else if(namePage == "Para Compartir" || namePage == "To Share"){
        nameValue = "toshare";
    } else if(namePage == "Cantina" || namePage == "Canteen"){
        nameValue = "cantina";             
    } else if(namePage == "Hamburguesas" || namePage == "Burgers"){
        nameValue = "burger";
    } else if(namePage == "Jarras y Sours" || namePage == "Jars and Sours"){
        nameValue = "jarnsour";             
    } else if(namePage == "Veggie"){
        nameValue = "veggie";
    } else if(namePage == "Mojitos, Spritz y Fizz" || namePage == "Mojitos, Spritz and Fizz"){
        nameValue = "mojitonfizz";
    } else if(namePage == "Sanguches" || namePage == "Sandwishes"){
        nameValue = "sanguches";
    } else if(namePage == "Destilados" || namePage == "Spirits"){
        nameValue = "destiled";
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

var checkm = document.querySelector(".checkm");
checkm.addEventListener('click', cambiarmenu);

function cambiarmenu() {
    let id = checkm.checked;
    if(id == true){
        // location.href = "en/toshare.html"
        location.href = `index2.html`
    } else {
        location.href = `index.html`
    }
}

window.onload=option_selected();  

function option_selected() {
    let number = "";
    let namePage = document.querySelector("title").innerText
    console.log(namePage);

    if(namePage == "Inicio" || namePage == "Home"){
        number = "1";
    } else if(namePage == "Para Compartir" || namePage == "To Share"){
        number = "2";            
    } else if(namePage == "Hamburguesas" || namePage == "Burgers"){
        number = "3";
    } else if(namePage == "Veggie"){
        number = "4";
    } else if(namePage == "Sanguches" || namePage == "Sandwishes"){
        number = "5";
    } else if(namePage == "Platos" || namePage == "Main courses"){
        number = "6";
    } else if(namePage == "Ensaladas" || namePage == "Salads"){
        number = "7";
    } else if(namePage == "Postres" || namePage == "Desserts"){
        number = "8";
    }

    if(namePage == "Coctel" || namePage == "Cocktail"){
        number = "1";
    } else if(namePage == "Cantina" || namePage == "Canteen"){
        number = "2";
    } else if(namePage == "Jarras y Sours" || namePage == "Jar and Sours"){
        number = "3";
    } else if(namePage == "Mojitos, Spritz y Fizz" || namePage == "Mojitos, Spritz and Fizz"){
        number = "4";
    } else if(namePage == "Destilados" || namePage == "Spirits"){
        number = "7";
    } 
    console.log(number);

    let li = document.querySelector(`#parent :nth-child(${number})`);
    console.log(li);

    li.style.cssText = 'background-color: black; border-radius: 5px;';

    // children.childNodes(number).classList.add(".selected");
}
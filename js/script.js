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
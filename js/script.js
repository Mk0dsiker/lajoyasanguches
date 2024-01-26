
// Funcion que activa el menu lateral
function menuOn() {
    //Seleccionamos el menu y modificamos su posicion removiendo la transformacion, apareciendo en pantalla.
    let menu = document.querySelector(".menu");
    menu.style.transform = "none";

    //Añadimos la clase menu-on al body que limita con overflow la visibilidad por scroll de la carta.
    document.querySelector('body').classList.add('menu-on');

    //Ocultamos el checkbox del header cuando se abre el menu lateral.
    document.getElementById("toggle").style.display = "none";
    document.getElementById("btn-title").style.display = "none";
}

//Funcion que quita el menu lateral
function menuOff() {
    //Seleccionamos el menu y modificamos su posicion transladandolo en el eje x un 100% removiendolo de la pantalla
    let menu = document.querySelector(".menu");
    menu.style.transform = "translateX(100%)";

    //Removemos la clase menu-on del body habilitando el scroll de la pagina
    document.querySelector('body').classList.remove('menu-on');

    //Añadimos el boton del checkbox al header nuevamente.
    document.getElementById("toggle").style.display ="block";
    
    document.getElementById("btn-title").style.display = "block";
}

// Sistema de navegacion por scrollintoView
function myFunction(element) {

    console.log(element.innerText);

    if(element.innerText == "Inicio"){
        let toggle2 = document.querySelector("#toggle_carta2");
        let id = toggle2.checked;
        if (id == true) {
        let container = document.getElementById("index_coctel");
        container.scrollIntoView(); 
        } else {
            container = document.getElementById("index");
            container.scrollIntoView(); 
        }        

    } else if(element.innerText == "Home"){
        let toggle2 = document.querySelector("#toggle_carta2");
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
        let btn = document.querySelector("#parent").children[1];
        console.log(btn);
        btn.classList.add("btn-clickon");        
    } else if(element.innerText == "To Share"){
        container = document.getElementById("toshare");
        container.scrollIntoView();
    } else if(element.innerText == "Hamburguesas"){
        container = document.getElementById("burgers");
        container.scrollIntoView();
    } else if(element.innerText == "Burgers"){
        container = document.getElementById("burgers");
        container.scrollIntoView();
    } else if(element.innerText == "Veggie"){
        container = document.getElementById("veggie");
        container.scrollIntoView();
    } else if(element.innerText == "Sanguches"){
        container = document.getElementById("sanguches");
        container.scrollIntoView();
    } else if(element.innerText == "Sandwish"){
        container = document.getElementById("sanguches");
        container.scrollIntoView();
    } else if(element.innerText == "Platos"){
        container = document.getElementById("plates");
        container.scrollIntoView();
    } else if(element.innerText == "Main courses"){
        container = document.getElementById("plates");
        container.scrollIntoView();
    } else if(element.innerText == "Ensaladas"){
        container = document.getElementById("salads");
        container.scrollIntoView();
    } else if(element.innerText == "Salads"){
        container = document.getElementById("salads");
        container.scrollIntoView();
    } else if(element.innerText == "Postres"){
        container = document.getElementById("postres");
        container.scrollIntoView();
    } else if(element.innerText == "Desserts"){
        container = document.getElementById("postres");
        container.scrollIntoView();


    } else if(element.innerText == "Cantina Joya"){
        container = document.getElementById("coctel");
        container.scrollIntoView();
    } else if(element.innerText == "Joya Canteen"){
        container = document.getElementById("coctel");
        container.scrollIntoView();
    } else if(element.innerText == "Jarras/Sours"){
        container = document.getElementById("jarnsour");
        container.scrollIntoView();
    } else if(element.innerText == "Jars/Sours"){
        container = document.getElementById("jarnsour");
        container.scrollIntoView();
    } else if(element.innerText == "Mojito/Spritz"){
        container = document.getElementById("mojitonfizz");
        container.scrollIntoView();
    } else if(element.innerText == "Mules/Clasicos"){
        container = document.getElementById("mulenclassic");
        container.scrollIntoView();
    } else if(element.innerText == "Mules/Classics"){
        container = document.getElementById("mulenclassic");
        container.scrollIntoView();
    } else if(element.innerText == "Shops/Cervezas"){
        container = document.getElementById("shopnbeer");
        container.scrollIntoView();
    } else if(element.innerText == "Shops/Beer"){
        container = document.getElementById("shopnbeer");
        container.scrollIntoView();
    } else if(element.innerText == "Destilados"){
        container = document.getElementById("destiled");
        container.scrollIntoView();
    } else if(element.innerText == "Spirits"){
        container = document.getElementById("destiled");
        container.scrollIntoView();
    } else if(element.innerText == "Vinos"){
        container = document.getElementById("wine");
        container.scrollIntoView();    
    } else if(element.innerText == "Wines"){
        container = document.getElementById("wine");
        container.scrollIntoView();    
    }
}

// Funcion que cambia a los colores y contenido del menu de navegacion cuando carta tragos es seleccionada.
function changetoDrink() {

    let menu = document.querySelector(".menu");
    menu.style.backgroundColor = "#00724d";

    let title = document.querySelector("title").innerText;
    if(title == "La Joya Sanguches"){
    let categories = document.querySelector(".categories");
    // console.log(categories);
    categories.innerHTML = `
    <button class="btn" onclick="myFunction(this)">Inicio</button>
    <button class="btn" onclick="myFunction(this)">Cantina Joya</button>
    <button class="btn" onclick="myFunction(this)">Jarras/Sours</button>
    <button class="btn" onclick="myFunction(this)">Mojito/Spritz</button>
    <button class="btn" onclick="myFunction(this)">Mules/Clasicos</button>
    <button class="btn" onclick="myFunction(this)">Shops/Cervezas</button>
    <button class="btn" onclick="myFunction(this)">Destilados</button>
    <button class="btn" onclick="myFunction(this)">Vinos</button>`;
    
    //Cambiamos el color del border bottom de nuestro header y las img logo y menu icon a verde
    document.querySelector(".header").style.borderBottom = "4px solid #00724d";
    document.querySelector(".logo_index").firstChild.src = "assets/img/logo_white_green.png"
    document.querySelector(".menu_icon").firstChild.src = "assets/icons/menu_icon_green.png"   
    } else {
        let categories = document.querySelector(".categories");
        // console.log(categories);
        categories.innerHTML = `
        <button class="btn" onclick="myFunction(this)">Home</button>
        <button class="btn" onclick="myFunction(this)">Joya Canteen</button>
        <button class="btn" onclick="myFunction(this)">Jars/Sours</button>
        <button class="btn" onclick="myFunction(this)">Mojito/Spritz</button>
        <button class="btn" onclick="myFunction(this)">Mules/Classics</button>
        <button class="btn" onclick="myFunction(this)">Shops/Beer</button>
        <button class="btn" onclick="myFunction(this)">Spirits</button>
        <button class="btn" onclick="myFunction(this)">Wines</button>`;
        
        //Cambiamos el color del border bottom de nuestro header y las img logo y menu icon a verde
        document.querySelector(".header").style.borderBottom = "4px solid #00724d";
        document.querySelector(".logo_index").firstChild.src = "../assets/img/logo_white_green.png"
        document.querySelector(".menu_icon").firstChild.src = "../assets/icons/menu_icon_green.png" 
    } 
}

// Funcion que cambia a los colores y contenido del menu de navegacion cuando carta comida es seleccionada.
function changetoFood() {

    let menu = document.querySelector(".menu");
    menu.style.backgroundColor = "#ddaa46";

    let categories = document.querySelector(".categories");
    // console.log(categories);

    let title = document.querySelector("title").innerText;
    if(title == "La Joya Sanguches"){
        categories.innerHTML = `
        <button class="btn" onclick="myFunction(this)">Inicio</button>
        <button class="btn" onclick="myFunction(this)">Para compartir</button>
        <button class="btn" onclick="myFunction(this)">Hamburguesas</button>
        <button class="btn" onclick="myFunction(this)">Veggie</button>
        <button class="btn" onclick="myFunction(this)">Sanguches</button>
        <button class="btn" onclick="myFunction(this)">Platos</button>
        <button class="btn" onclick="myFunction(this)">Ensaladas</button>
        <button class="btn" onclick="myFunction(this)">Postres</button>`;

        //Cambiamos el color del border bottom de nuestro header y las img logo y menu icon a amarillo.
        document.querySelector(".header").style.borderBottom = "4px solid #ddaa46";
        document.querySelector(".logo_index").firstChild.src = "assets/img/logo_white.png"
        document.querySelector(".menu_icon").firstChild.src = "assets/icons/menu_icon.png"
    } else {
        categories.innerHTML = `
        <button class="btn" onclick="myFunction(this)">Home</button>
        <button class="btn" onclick="myFunction(this)">To Share</button>
        <button class="btn" onclick="myFunction(this)">Burgers</button>
        <button class="btn" onclick="myFunction(this)">Veggie</button>
        <button class="btn" onclick="myFunction(this)">Sandwish</button>
        <button class="btn" onclick="myFunction(this)">Main courses</button>
        <button class="btn" onclick="myFunction(this)">Salads</button>
        <button class="btn" onclick="myFunction(this)">Desserts</button>`;

        //Cambiamos el color del border bottom de nuestro header y las img logo y menu icon a amarillo.
        document.querySelector(".header").style.borderBottom = "4px solid #ddaa46";
        document.querySelector(".logo_index").firstChild.src = "../assets/img/logo_white.png"
        document.querySelector(".menu_icon").firstChild.src = "../assets/icons/menu_icon.png"
    }
}

//Funcion del checkbox en el header.
function changeMenu() {
    //Guardamos nuestro checkbox en una variable
    let toggle = document.querySelector("#toggle_carta");
    //Guardamos su estado en id
    let id = toggle.checked;
        if(id == true) {
            //Cambia el estado del checkbox del menu lateral
            document.querySelector("#toggle_carta2").checked = true;
            //Llama a la funcion que cambia color y contenido a tragos
            changetoDrink();
            //Hace scroll a la seccion de cocteleria.
            document.querySelector("html").style.scrollBehavior = "auto";
            document.getElementById("index_coctel").scrollIntoView();
            document.querySelector("html").style.scrollBehavior = "smooth";            
            //De lo contrario          
        } else {
            //Cambia el estado del checkbox del menu lateral.
            document.querySelector("#toggle_carta2").checked = false; 
            //Llama a la funcion que cambia color y contenido a comidas
            changetoFood();
            //Hace scroll a la seccion de comida
            document.querySelector("html").style.scrollBehavior = "auto";
            document.getElementById("index").scrollIntoView();
            document.querySelector("html").style.scrollBehavior = "smooth";
        }
}

//Funcion del checkbox del menu lateral
function changeMenu2() {
    //Guardamos nuestro checkbox en una variable
    let toggle2 = document.querySelector("#toggle_carta2");
    //Guardamos su estado en id
    let id = toggle2.checked;
        if(id == true) {
            //Cambia el estado del checkbox del header
            document.querySelector("#toggle_carta").checked = true;
            //Llama a la funcion que cambia color y contenido a tragos
            changetoDrink();
            //Hace scroll a la seccion de cocteleria.
            document.querySelector("html").style.scrollBehavior = "auto";
            document.getElementById("index_coctel").scrollIntoView();
            document.querySelector("html").style.scrollBehavior = "smooth";  
            //De lo contrario          
        } else {
            //Cambia el estado del checkbox del header.
            document.querySelector("#toggle_carta").checked = false; 
            //Llama a la funcion que cambia color y contenido a comidas
            changetoFood();
            //Hace scroll a la seccion de comida
            document.querySelector("html").style.scrollBehavior = "auto";
            document.getElementById("index").scrollIntoView();
            document.querySelector("html").style.scrollBehavior = "smooth";
        }
}

//Funcion que cambia idioma
function changeLanguage() {

    let togglei = document.querySelector("#toggle_idioma");
    let id = togglei.checked;

    if(id == true){
            location.href = "en/index.html"
    } else {
        location.href = "../index.html"
    }
}

//Funcion que cambia el menu al hacer scroll entre cartas
window.addEventListener("scroll", function(){
    let target = document.getElementById("index_coctel");
    // console.log(target);
    let targetPos = target.getBoundingClientRect().top;
    console.log(targetPos)
    if(targetPos <= 100){
        changetoDrink();
        document.getElementById("toggle_carta").checked = true;
        document.getElementById("toggle_carta2").checked = true;
    } else {
        changetoFood();
        document.getElementById("toggle_carta").checked = false;
        document.getElementById("toggle_carta2").checked = false;
    }
});

//Funcion que desactiva el uso de menus contextuales
document.addEventListener("contextmenu", function(event){
        event.preventDefault();
    }, false);
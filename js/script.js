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
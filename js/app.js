window.onload = function() {
    // var menu = document.getElementById("menu");
    var boton = document.getElementById("btn");
    
    boton.addEventListener("click", navigationBar);
};

var navigationBar = (function() {
    var first = true;
    return function() {
        first ? showMenu() : hiddenMenu();
        first = !first;
    }
})();

function showMenu() {
    var fondo = document.querySelector("#container")
    fondo.style.backgroundColor = "#4CD06C";
    var line = document.querySelectorAll(".line");
    var button = document.getElementById("btn");
    for (var i = 0; i < line.length; i++) {
        button.removeChild(line[i]);
    }
    var letraX = button.textContent = "X"; 
      

    var animate = setInterval(show, 0);
    var pos = 0;
    function show() {
        if (pos >= 180) {
            clearInterval(animate);
        } else {
            pos += 1;
            menu.style.left = pos+"px";
        }
    }
}

function hiddenMenu() {
    var animate = setInterval(hide, 0);
    var pos = 180;
    function hide() {
        if (pos == 0) {
            clearInterval(animate);
       } else {
            pos -= 1;
            menu.style.left = pos+"px";
        }
    }
}
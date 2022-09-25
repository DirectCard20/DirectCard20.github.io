const botao = document.querySelector(".botao_mudar");
let html = document.querySelector("html");
let divBotao = document.querySelector("#mudar_tema");
let corpo2 = document.querySelector("#corpo2");
let foto = document.querySelector(".foto");

window.onload = function (){
    html.style.cssText = 'background-image: url("https://images.pexels.com/photos/1417647/pexels-photo-1417647.jpeg?auto=compress&cs=tinysrgb&w=5472&h=3648&dpr=1");' + 'background-size: cover;';
    botao.innerHTML = 'Light Mode';
}

let aux = 0;
botao.onclick = function(){
    if(aux % 2 == 0){
        darkMode();
    } else{
        lightMode();
    }
    aux++;
}

function darkMode (){
    html.style.cssText = 'background-image: url("https://images.pexels.com/photos/1526725/pexels-photo-1526725.jpeg?auto=compress&cs=tinysrgb&w=6000&h=4000&dpr=1");' + 'background-size: cover;';
    botao.style.cssText = 'background-color: #0195bd;' + 'color: black;' + 'border: 1px solid black;';
    corpo2.style.cssText = 'border: solid white 2px;';
    foto.style.cssText = 'border: solid white 2px;';
    botao.innerHTML = 'Dark Mode';
}

function lightMode(){
    html.style.cssText = 'background-image: url("https://images.pexels.com/photos/1417647/pexels-photo-1417647.jpeg?auto=compress&cs=tinysrgb&w=5472&h=3648&dpr=1");' + 'background-size: cover;';
    botao.style.cssText = 'background-color: #334044;';
    corpo2.style.cssText = 'border: solid black 2px;';
    foto.style.cssText = 'border: solid black 2px;';
    botao.innerHTML = 'Light Mode';
}
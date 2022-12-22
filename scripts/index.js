const botao = document.querySelector(".botao_mudar");
const html = document.querySelector("html");
const divBotao = document.querySelector("#mudar_tema");
const corpo2 = document.querySelector("#corpo2");
const foto = document.querySelector(".foto");
const data = new Date();
const ANONASCIMENTO = 2002;

window.onload = function (){
    html.style.cssText = 'background-image: url("https://images.pexels.com/photos/1417647/pexels-photo-1417647.jpeg?auto=compress&cs=tinysrgb&w=5472&h=3648&dpr=1");' + 'background-size: cover;';
    botao.innerHTML = 'Light Mode';
    const informacoes = document.querySelector('.informacoes');
    const currentYear = data.getFullYear();
    const idade = currentYear - ANONASCIMENTO;
    informacoes.innerHTML = `Brasileiro &bull; ${idade} anos<br>
                            Barro, Ceará<br>
                            gui-costaquino@hotmail.com`;
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
    html.style.cssText = 'background-image: url(./img/pexels-jarod-lovekamp-5109718.jpg);' + 'background-size: cover;';
    botao.style.cssText = 'background: rgba(255, 255, 255, 0.1);' + 'color: black;' + 'border: 1px solid black;';
    botao.innerHTML = 'Dark Mode';
    sessao1.style.cssText = 'border: solid white 2px;';
    sessao2.style.cssText = 'border: solid white 2px;';
    sessao3.style.cssText = 'border: solid white 2px;';
    sessao4.style.cssText = 'border: solid white 2px;';
    sessao5.style.cssText = 'border: solid white 2px;';
    foto.style.cssText = 'border: solid white 2px;';
}

function lightMode(){
    html.style.cssText = 'background-image: url(./img/pexels-photo-1417647.jpeg);' + 'background-size: cover;';
    botao.style.cssText = 'background: rgba(255, 255, 255, 0.1);';
    botao.innerHTML = 'Light Mode';
    sessao1.style.cssText = 'border: solid black 2px;';
    sessao2.style.cssText = 'border: solid black 2px;';
    sessao3.style.cssText = 'border: solid black 2px;';
    sessao4.style.cssText = 'border: solid black 2px;';
    sessao5.style.cssText = 'border: solid black 2px;';
    foto.style.cssText = 'border: solid black 2px;';
}

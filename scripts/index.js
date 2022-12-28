const html = document.querySelector("html");
const informacoes = document.querySelector('#informacoes');
const data = new Date();
const ANONASCIMENTO = 2002;

window.onload = function (){
    const currentYear = data.getFullYear();
    const idade = currentYear - ANONASCIMENTO;
    informacoes.innerHTML = `Brasileiro &bull; ${idade} anos<br>
                            Barro, Ceará<br>
                            gui-costaquino@hotmail.com`;
}
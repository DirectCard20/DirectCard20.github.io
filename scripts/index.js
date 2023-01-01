const html = document.querySelector("html");
const informacoes = document.querySelector('#informacoes');
const data = new Date();
const DIANASCIMENTO = 05;
const MESNASCIMENTO = 02;
const ANONASCIMENTO = 2002;

window.onload = function (){
    defineIdade();
}

function defineIdade(){
    let idade;
    if(DIANASCIMENTO === data.getDate() && MESNASCIMENTO === data.getMonth()+1){
        idade = data.getFullYear() - ANONASCIMENTO;
    } else{
        idade = (data.getFullYear() - ANONASCIMENTO) - 1;
    }
    informacoes.innerHTML = `Brasileiro &bull; ${idade} anos<br>
                            Cajazeiras, Paraíba<br>
                            gui-costaquino@hotmail.com`;
}
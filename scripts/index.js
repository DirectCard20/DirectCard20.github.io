const html = document.querySelector("html");
const informacoes = document.querySelector('#informacoes');

window.onload = function (){
    informacoes.innerHTML = `Brasileiro &bull; ${getAge("2002/02/05")} anos<br>
                            Cajazeiras, Paraíba<br>
                            gui-costaquino@hotmail.com`;
}

function getAge(dateString){
    const birthday = new Date(dateString);
    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    let month = today.getMonth() - birthday.getMonth();
    if(month < 0 || (month === 0 && today.getDate() < birthday.getDate())){
        age--;
    }
    return age;
}
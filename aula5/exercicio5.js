const input = require("../input");

(async() => {
    console.log("Boa noite, digite sua quantidade de pontos: ")
    let pont = Number(await input());

switch(true){
    case(pont < 100):
        console.log("Bem vindo Cliente Iniciante ");
        break;
    case(pont >= 100 && pont < 300):
        console.log("Bem vindo Cliente Bronze ")
        break;
    case(pont >= 300 && pont < 700):
        console.log("Bem vindo Cliente Prata ")
        break;
    case(pont >= 700):
        console.log("Bem vindo Cliente Ouro")
    console.log("Parabéns você ganhou direito a um combo grástis por mês")
        
}


})();
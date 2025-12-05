const input = require("../input");

(async ()=> {
    console.log("Bem vindo a LanchoneteZ ");
    console.log("Escolha o lanche no cardápio: ");
    console.log("1-X-Salada");
    console.log("2-X-Burgue");
    console.log("3-Misto Quente");
    console.log("4-Suco Natural");
    console.log("5-Refrigerante");   
    
    let item = Number(await input());

switch(item){
    case 1:
        console.log("Você escolheu X-Salada");
        break;
    case 2:
        console.log("Você escolheu X-Burgue");
        break;
    case 3:
        console.log("Você escolheu Misto Quente");
        break;
    case 4:
        console.log("Você escolheu Suco Natural");
        break;
    case 5:
        console.log("Você escolheu Refrigerante");
        break;
    default:
        console.log("Não escolheu nada do cardápio")
}
})();
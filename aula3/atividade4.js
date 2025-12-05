const input = require("../input");

(async () => {
    console.log("Deseja ganhar um presente misterioso? sim ou nao");
    let resposta = await input();

    if(resposta == "sim" ){
        console.log("Você ganhou um abraço ");
    }else if(resposta == "nao"){
        console.log("Você ganhou 50 reais");

    }




})();
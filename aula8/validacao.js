const input = require("../input");
const {validaCPF} = require(`./mau`);


(async () => {
    console.log("Digite seu CPF: ");
    let cpf = await input();

    if(validaCPF(cpf)){
        console.log("O cpf é válido.");
    }else{
        console.log("Cpf não válido");
    }


})();

    
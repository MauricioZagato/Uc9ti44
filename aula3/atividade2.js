const input = require("../input");

(async() => {
    console.log("Digite a senha ou sua chave? ");
    let senha = await input();

     if(senha == "senac123" || senha.toLowerCase() == "sim" ){
        console.log("Senha correta, Bem vindo")
    }

})();
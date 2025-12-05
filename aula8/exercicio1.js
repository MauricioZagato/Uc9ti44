/*
Faça uma função na biblioteca de vocês que valida email e telefone, e 
reescreva o programa de agenda cadastrando nome, email e telefone validos
*/

const { validaTE } = require(`./mau`)
const { ValidaEM } = require(`./mau`);
const input = require("../input");

(async () => {

    let agenda = [];
    let continuar;
    do {
        console.log("Digite um nome:")
        let nomeE = await input();

        console.log("Digite um telefone:")
        let telE = await input();

        console.log("Digite seu email:")
        let emaiE = await input();



        if (ValidaEM(emaiE) && validaTE(telE)) {
            console.log("telefone válido");
            console.log("Email válido");

            agenda.push(
                {
                    nome: nomeE,
                    telefone: telE,
                    email: emaiE
                }
            );
            console.log("Deseja continuar? (sim)")
            continuar = (await input()).toLowerCase();

        } else {
            console.log("Telefone inválido");
            console.log("Email inválido");
            
        }


    } while (agenda.length <= 5 && continuar == "sim")
    console.log(agenda)

})();
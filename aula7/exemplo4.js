
function divi(n1, n2=1){
    return n1 / n2
}

function mult(n1, n2=1){
    return n1 * n2
}

function soma(n1, n2=0){
    return n1 + n2
}

function sub(n1, n2=0){
    return n1 - n2
}

const input = require("../input");

(async() => {
    console.log(`Digite o calculo que deseja fazer:
        1- divisão
        2- Multiplicão
        3- Soma
        4- Subtração
        `);
    let escolha = await input();

    let func;

    switch(escolha){
        case "1": func = mult; 
        break;
        case "2": func = divi; 
        break;
        case "3": func = soma; 
        break;
        case "4": func = sub; 
        break;

        default: console.log("Opção invalida.")
    }

    if(Number(escolha)>4) return

    console.log("Digite 2 número: ")

    let e2 = Number(await input());
    let e1 = Number(await input());

    let resposta = func(e1,e2)
    console.log(`O ressultado é : ${resposta}` )


})();


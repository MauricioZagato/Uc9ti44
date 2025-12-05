/*
    um programa que verifica se a pessoa colocou saldo maior que 5 e apertou o número 42, 
    se for verdade de para ele uma coca-cola, se não mande-o embora e devolva seu dinheiro
*/

const input = require("../input");


(async() => {
    console.log("Digite seu saldo? ")
    let saldo = Number(await input());

    console.log("Qual o numero do produto você deseja? ");
    let produto = Number(await input());
    
    if(isNaN(saldo) ){
        console.log("Saldo deve ser um número");
    }else{
    if(isNaN(produto)){
        console.log("Deve ser um número para o produto");
    }else if(saldo > 5 && produto == 42){
        console.log("Pegue sua coca-cola");
    }else{
        console.log(`Vá embora e pegue seu saldo ${saldo}!`);
    }
    }
})();
const input = require("../input");



(async () => {
    console.log("Digite o valor da sua compra e veja quanto de desconto receberá");
    let compra = Number(await input());
    

    switch(true){
        case ( compra >=100):
            desc = compra *0.20
            console.log(`Parabéns você ganhou 20% de descontos, o valor da sua compra ficou ${compra - desc}`)
            break;

        case ( compra >= 50 && compra < 100):
            desc = compra *0.10
            console.log(`Parabéns você ganhou 10% de desconto, o valor da sua compra ficou ${compra - desc} `)
            break;
            
        case ( compra >= 20 && compra < 50):
            desc = compra *0.05
            console.log(`Parabéns você ganhou 5% de desconto, sua compra ficou ${compra - desc}`)
            break;
            
        default:
            console.log("Sem desconto, valor muito abaixo.")


    }

})();
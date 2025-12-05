const input = require("../input");

(async () => {
    console.log("Digite o valor do pagamento que deseja fazer ")
    let valor = Number(await input());

    console.log("Escolha a forma de pagamento: ")
    console.log("1- Dinheiro")
    console.log("2- Débito")
    console.log("3- Crédito")
    console.log("4- Pix")

    let pagamento = Number(await input());

    switch(pagamento){
        case 1:
            desc = (valor *0.10)
            console.log(`Forma escolhida foi dinheiro teve um desconto de 10%, o valor final foi ${valor - desc}`)
            break;
        case 2:
            desc = (valor *0.05)
            console.log(`Forma escolhida foi débito, teve um desconto de 5%, o valor final foi ${valor - desc}`)
            break;
        case 3:
            console.log(`Forma escolhida foi crédito, não há desconto, valor final ${valor}`)
            break;
        case 4:
            desc = (valor *0.08)
            console.log(`Forma escolhida foi pix, teve um desconto de 8%, o valor final foi ${valor - desc}`)
            break;
        default:
            console.log("Forma de pagamento inválida")
    }



})();
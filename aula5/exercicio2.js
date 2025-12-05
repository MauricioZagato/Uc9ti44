const input = require("../input");

(async()=> {
    console.log("Bem vindo a LanchoneteZagato ");
    console.log("Cardápio com preços: ");
    console.log("100 -  X-Salada ");
    console.log("101 - X-Burger");
    console.log("102 - Cachorro-Quente");
    console.log("103 - Suco")
    console.log("104 - Refrigerante")
    let codigo = Number(await input());

    console.log("Quantidade do pedido? ")
    let quant = Number(await input());



    switch(codigo){
        case 100:
            console.log(`Você pediu ${quant} do x-Salada, ${quant *12.00}`);
            break;
        case 101:
            console.log(`Você pediu ${quant} do X-Burger, ${quant *10.00}`);
            break;
        case 102:
            console.log(`Você pediu ${quant} do Cachorro-Quente ${quant *8.50}`);
            break;
        case 103:
            console.log(`Você pediu ${quant} do Suco ${quant *5.00}`);
            break;
        case 104:
            console.log(`Você pediu ${quant} do Refrigerante ${quant *6.00}`);
            break;
        default:
            console.log("Código Inválido")
    }


})();
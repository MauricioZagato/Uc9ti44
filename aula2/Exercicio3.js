
const input = require("../input");

(async() => {
    console.log("Digite o primeiro número da soma" );
    let num = Number(await input());

    console.log("Digite o segundo número da soma" );
    let numero = Number(await input());


    let total = (num + numero)
    console.log("A soma dos números são: " + total)

})()

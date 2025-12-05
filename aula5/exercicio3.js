const input = require("../input");

(async () => {
    console.log("Bem Vindo, escolhe o tamanho do seu combo")
    console.log("P = Combo tamanho Pequeno")
    console.log("M = Combo tamanho Medio")
    console.log("G = Combo tamanho Grande")
    let tamanho = await input()

    let letra = tamanho[0].toUpperCase();

    switch(tamanho){
        case "P":
            console.log("Combo Pequeno escolhido valor (R$ 15.00).")
            break;
        case "M":
            console.log("Combo Médio escolhido valor (R$ 20.00)")
            break;
        case "G":
            console.log("Combo Grande escolhido (R$ 25.00)")
            break;
        default:
            console.log("Tamanho inválido")

    }


})();
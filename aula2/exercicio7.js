const input = require("../input");

(async () => {
    console.log("Digite um frase: ");
    let frase = await input();

    frase = frase.length

    console.log(`Sua frase tem ${frase} caracteres`);
})();


const input = require("../input");

(async () => {
    console.log("Digite um número: ");
    let numero = await input();

    console.log("O dobro é "+numero*2);
})();



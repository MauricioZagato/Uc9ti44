//1) Transforme Nome do auto em citação

const input = require("../input");

(async() => {
  
    console.log("Qual o seu primeiro nome? ");
    let nome = await input();

    console.log("Qual o seu sobrenome? ");
    let sobrenome = await input();

    let letra = sobrenome[0].toUpperCase();
    let minusculo = nome.toLowerCase();
    let saida = minusculo[0].toUpperCase() + minusculo.slice(1);

    console.log(` Citação ${letra}. ${saida}`)
})();


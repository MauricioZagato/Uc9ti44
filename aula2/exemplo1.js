//estou fazendo uma importação (trazer funções externas para este arquivo)
const input = require("../input");

//declarei uma variavel do tipo "const" chamada input


//uma função anonima

(() => {

})();




(async () => {
    console.log("Qual a sua idade: ");
    let idade = await input();
    console.log("a sua idade é " + idade);
})();



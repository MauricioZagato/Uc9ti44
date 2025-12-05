/*
façam um programa que pede o nome e a idade e mostre na saida usando interpolação a seguinte mensagem:
"Olá nome, sua idade é 00"
*/

var nome = "Mauricio"
var idade = 23;

console.log(`Olá ${nome}, sua idade é ${idade}`);

const input = require("../input");

(async() => {
    console.log("Qual é o seu nome? ");
    let nome = await input();

    console.log("Qual é a sua idade? ");
    let idade = await input();

    console.log(`Olá ${nome}, sua idade é ${idade}.`)
})();




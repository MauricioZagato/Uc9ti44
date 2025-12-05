
let prompt = require("prompt-sync")()

let resposta = 7
let numero = 9

while(numero != resposta){
    
    numero = Number(prompt("Digite um número: "))

    if(numero == resposta){
        console.log("Acertou o número escolhido! ")
        break
    }else{
        console.log("Você errou... ")

    }
}

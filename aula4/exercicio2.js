const input = require("../input");

/*

Você foi contratado para criar o sistema de uma lanchonete.

Esse sistema deve permitir que o cliente escolha o preço dos
produtos usados no lanche e, automaticamente, calcule o valor
final dos lanches considerando o lucro que o cliente espera ter

Os ingredientes são
Pão, salsicha, bacon, purê de batata, salada e batata palha

Este é o cardápio do restaurante
1 - Hotdog simples Salsicha e pure
2 - Dog Salada Salsicha e salada
3 - Dog Duplo Especial Duas salsichas, purê e bacon
4 - Dog-Tudo Duas salsichas, purê em dobro, bacon, salada

Considere que todos os lanches contém Pão e Batata Palha

------ ATIVIDADE
Mostre o valor dos lanches para o dono, sendo o preço de custo,
e o valor para o cliente final, considerando o lucro (preço venda)


*/





(async () => {
    console.log("Boa noite, bem vindo a lanchonete ZagatoDog 🥞 ");
    console.log("Escolha o valor dos ingredientes: ");

    console.log("Valor do pão: R$ ")
    let pao = parseFloat(await input())

    console.log("Valor da salsicha: R$")
    let salsicha = parseFloat(await input())

    console.log("Valor do bacon: R$ ")
    let bacon = parseFloat(await input())

    console.log("Valor do purê de batata: R$ ")
    let pure = parseFloat(await input())

    console.log("Valor da salada: R$ ")
    let salada = parseFloat(await input())

    console.log("Valor da batata palha: R$ ")
    let palha = parseFloat(await input())

    console.log("Qual o lucro deseja ter sobre o pedido?")
    let porc = parseFloat(await input())  

    porc = porc /100
    

    console.log(" 📓 Cardápio ZDog 📓")
    console.log(`01-Hotdog simples com salsicha e pure: R$ ${pao + salsicha + pure + palha + porc}`)
    console.log(`02-Dog Salada com salsicha e salada: R$ ${pao + salsicha + salada + palha + porc}`)
    console.log(`03-Dog Duplo Especial com duas salsichas, purê e bacon: R$ ${pao + salsicha + salsicha + pure + bacon + palha + porc}`)
    console.log(`04-Dog-Tudo Duas salsichas, purê em dobro, bacon, salada: R$ ${pao + salsicha + salsicha + pure + pure + bacon + salada + palha + porc}`)





})();



const input = require("../input");

(async () => {

    console.log("Bem vindo ao Conrodito's Bank 🏦");
    console.log("Digite 1 para depositar ou 2 para sacar: ");
    let resposta = await input()
    let saldo = 300


    console.log("💵 Digite o valor: ")
    let valor = Number( await input())

    if( resposta == "1" ){
        if(valor >= 1){
            saldo += valor

        }else{
            console.log("O valor mínimo deve ser R$ 1")
        }

    }else if( resposta == "2" ){
        if(valor <= saldo){
            saldo -= valor
     }else{
            console.log("Dinheiro suficiente ")
    }

}
    console.log("Operação realizado com sucesso!")
    console.log(`Valor atual na conta: R$ ${saldo}`)
    console.log("Até a proxima 👍 ")

})();





// aula de laço repetições

let contador  = 0
let continuar_loop = true // bool

while(continuar_loop == true){
//  contador = contador +1
//  contador += 1
    contador++ // aumenta o valor da variavel em exatamente 1
    //console.log("Olá, boa noite! Repetiu "+contador+" vezes")


    if(contador == 1000000){
        console.log("Aeee passou um ✔")
        continuar_loop = false
        //break;

    }

}
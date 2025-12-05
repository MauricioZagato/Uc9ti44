const input = require("../input");

(async () => {
    console.log("Digite um número: ");
    let num = Number(await input());

    if(isNaN(num) ){
        console.log("Digite apenas números");
    }else if(num == 0){
        console.log("Zero é zero")
    }else if(num % 2 == 0){
        console.log("É par")
    }else{    
        console.log("É impar ");
    }

})();
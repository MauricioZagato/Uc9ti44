const input = require("../input")

(async () => {
    console.log(" Digite uma frase com a palavra startup:");

    let frase = await input();

   console.log(frase.replace("startup","empresa"));

})();



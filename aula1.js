console.log("Olá mundo");

var nome = "Mauricio"
// estou fazendo uma concatenação 
console.log("Olá " +nome);

var idade = 23;
// estou fazendo uma interpolação
/*
"" - aspas
'' - apostrofe
`` - crase
*/
console.log(`Olá ${nome}, sua idade é ${idade}`);


/*
() - parenteses para
[] - colchetes para vetores
{} - chaves para estruturas ou contexto
*/

//camalcase (camelo)
var listaCafe = []; //estou declarando um vetor
listaCafe[0] = "café"; //uma atribução
listaCafe[1] = "ovo";


//undercase (_)
var lista_cafe = ["café", "ovo"];

listaCafe.push("bacon");
lista_cafe.push("pão");

console.log(listaCafe);
console.log(lista_cafe);



console.log(`Bem vindo ${nome}, sua identidade por favor`);

var identidadePessoal = [];
identidadePessoal.push("Mauricio");
identidadePessoal.push("23");
identidadePessoal.push("00-9999-9999");

console.log(identidadePessoal);

//estrutura, dicionario, classe anonima
var usuario = {
    nome: "Mauricio",
    idade: 35,
    telefone: "00-9999-9999"
}

console.log(usuario.idade);



// criar uma lista telefonica
var ListaTelefonica = [];
ListaTelefonica.push("Francisco Chico");
ListaTelefonica.push("Rua Penino Brocolis");
ListaTelefonica.push("11-2222-3333");

var Lista_Telefonica = [];
Lista_Telefonica.push("Maria Abelha");
Lista_Telefonica.push("Rua Alface Cenoura");
Lista_Telefonica.push("99-8888-7777");

var cep = {
    nome: "Francisco Chico",
    rua: "Penino Brocolis",
    telefone: "11-2222-3333",

    nome: "Maria Abelha",
    endereco: "Rua Alface Cenoura",
    telefone: "99-8888-7777"
}

console.log(ListaTelefonica);

var ListaCel = [];

ListaCel.push({
    nome: "Robert",
    tel: "11 22223333",
    endereco: "Rua Pepino"
});

ListaCel.push({
    nome: "fernando",
    tel: "22 33334444",
    endereco: "Rua alface"
});

console.log(ListaCel);

var ProdutosLista = [];

ProdutosLista.push({
    nome: "tijolo",
    codigo: "1112",
    valor: 20.00,
});

ProdutosLista.push({
    nome: "cimento",
    codigo: "1113",
    valor: 45.00
});

console.log(ProdutosLista[0].valor+ProdutosLista[1].valor);



// atividade: lista de alunos e suas expectivas notas.

var notasAlunos = []
notasAlunos.push({
    nome: "Pedrinho",
    matematica: 8.5
})

notasAlunos.push({
    nome: "Aninha",
    matematica: 7
})

notasAlunos.push({
    nome: "Bruna",
    matematica: 10
});

var notas = (notasAlunos[0].matematica + notasAlunos[1].matematica + notasAlunos[2].matematica)/3

console.log ("A media é " + notas)



    
function random(inferior=0, superior=1, tipo='float'){
    if(superior<inferior)
    {
        console
            .error("Numero superior deve ser maior que o numero");
        return;
    }

    switch(tipo){
        case 'float': 
            return Math.random()
                *(superior+1-inferior)+(inferior);
        case 'int': 
            return Math.floor(Math.random()
                *(superior+1-inferior))+(inferior);
    }   
}


function validaCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // remove tudo que não for número

    if (cpf.length !== 11) return false;

    // Elimina CPFs inválidos conhecidos
    if (/^(\d)\1{10}$/.test(cpf)) return false;

    // Valida 1º dígito
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let digito1 = resto > 9 ? 0 : resto;

    // Valida 2º dígito
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let digito2 = resto > 9 ? 0 : resto;

    return digito1 == cpf[9] && digito2 == cpf[10];
}


function ValidaEM(email){

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validaTE(telefone){
    telefone = telefone.replace(/\D/g, ""); // remove tudo exceto números

    return telefone.length === 10 || telefone.length === 11;

}

module.exports = {
    random, validaCPF, ValidaEM, validaTE

}


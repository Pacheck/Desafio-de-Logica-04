// Declarações 

function exibeMensagem() {
    console.log('Exibindo mensagem');
}

function exibeNome(nome) {
    console.log(nome);
}

function exibeCaracteristicas(nome, idade, estiloMusical) {
    console.log(`Meu nome é ${nome}, tenho ${idade} anos de idade e meu estilo musical favorito é ${estiloMusical}`);
}

function exibeFilmeEmusicaFavoritos(filme, musica){
    console.log(`Meu filme favorito é ${filme} e minha música favorita é ${musica}`);
}

function exibeTriplo(numero) {
    console.log(numero * 3);
}

// Invocações

exibeMensagem();

exibeNome('Pedro Pacheco');

exibeCaracteristicas('Pedro', 24, 'Rock');

exibeFilmeEmusicaFavoritos('The martian', 'A little piece of heaven');

exibeTriplo(2);
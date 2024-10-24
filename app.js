let listaDeNumerosAleatorios = []
let numeroLimite = 100;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'jogo do numero secreto');
    exibirTextoNaTela('p', 'escolha um numero de  1 a 100');
    
}

exibirMensagemInicial()


function verificarChute() {

    let chute = document.querySelector('input').value;

    console.log(numeroAleatorio);

    if (chute == numeroAleatorio) {

        exibirTextoNaTela('h1', 'acertou!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('h1', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled')

    }
    else {

        if (chute > numeroAleatorio) {
            exibirTextoNaTela('h1', 'voce errou!!');
            exibirTextoNaTela('p', 'o numero secreto é menor');
        }
        else {
            exibirTextoNaTela('h1', 'voce errou!!');
            exibirTextoNaTela('p', 'o numero secreto é maior');
        }

        tentativas++;
        limparCampo();
    }

}

function novoJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosAleatorios.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosAleatorios = [];
    }

    if(listaDeNumerosAleatorios.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosAleatorios.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = ''
}

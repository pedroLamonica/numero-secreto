var listaDenumerosSorteados = []
var numeroFinal = 100;
var tentativas = 1;
var numeroSecreto = gerarNumeroAleatorio()



function exibirTextoNaTela (tag, texto){

        let campo = document.querySelector(tag);
        campo.innerHTML = texto;

}

 function exibirMensagenInicial(){

        exibirTextoNaTela('h1', 'Jogo de adivinhar números! ');
        exibirTextoNaTela('p', `Escolha um número de 1 a ${numeroFinal}`);

 }

  exibirMensagenInicial();


function verificarChute(){
    
     var chute = document.querySelector('input').value;
     
     
     if (chute == numeroSecreto){

            exibirTextoNaTela('h1', 'ACERTOU!');
            var palavraTentativas = tentativas > 1 ? 'tentativas': 'tentativa';
            var mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`
            exibirTextoNaTela('p', mensagemTentativa);
            document.getElementById('reiniciar').removeAttribute('disabled')
            

     } else {

            if(chute > numeroSecreto){

                    exibirTextoNaTela('h1', 'Você errou');
                    exibirTextoNaTela('p', 'O número secreto é menor que ' + chute + '!');

            } else{

                    exibirTextoNaTela('h1', 'Você errou');
                    exibirTextoNaTela('p', 'O número secreto é maior que ' + chute + '!');


            }
            tentativas++;
            limparCampo()
     }
     
     
}

function gerarNumeroAleatorio() {
    
        var numeroEscolhido = parseInt(Math.random() * numeroFinal);
        
        if (listaDenumerosSorteados.includes(numeroEscolhido)){

                return gerarNumeroAleatorio();

        } else {
            listaDenumerosSorteados.push(numeroEscolhido)
            console.log(listaDenumerosSorteados)
            return numeroEscolhido;

        }
       
}

function limparCampo() {

    chute = document.querySelector('input');
    chute.value = '';
    
}

function reiniciarJogo() {

        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirMensagenInicial();
        document.getElementById('reiniciar').setAttribute('disabled', true);
    
}
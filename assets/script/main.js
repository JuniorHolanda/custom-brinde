// botões principais
const listaBtnMain = document.querySelectorAll('.btnPrincipais')

// referencia o container pai dos dois tipos de botões, principal e secundários
const containerPaiDosBotoes = document.querySelector('#controlePrincipal');

//cria e adiciona classe a uma div para a lista de botões secundários
const containerBtnSecondarios = document.createElement('div');

const nomeDasCores = [ 'azul' , 'vermelho' , 'preto' ]
const btnCoresModal = ['button' , 'button' , 'button'];

function btnMudaCor (cor) {
    btnCoresModal[i].classList.add('btnCores');
    btnCoresModal[i].id = cor;
}

// laço para a criação dos botões de cores cores
for (let i = 0; i < btnCoresModal.length; i++) {
    console.log(btnCoresModal.id);
    btnMudaCor(nomeDasCores[i])
}

let titleModal = document.createElement('h3');
titleModal.textContent = 'Escolha a cor do corpo';

containerBtnSecondarios.classList.add('btnSecundariosContainer');

let modalBtnSecundario = null;
//função recebe como argumento o id da lista listaBtnMain 
function mostraBotao (id) {
    if (modalBtnSecundario){
        modalBtnSecundario.remove();
        modalBtnSecundario = null;
    } else {
        modalBtnSecundario = document.createElement('div');
        modalBtnSecundario.classList.add('containerModalBtnSecundario');
        containerPaiDosBotoes.appendChild(modalBtnSecundario);
    }
       
}

// Estrutura de laço, enquanto i for menor que o total de itens da listaBtnMain o laço acontece, a cada laço é atribuído ao botão da vez um ouvinte de click.
for (i=0; i < listaBtnMain.length; i++){
    let botao = listaBtnMain[i];
    botao.addEventListener('click' , function() {
        //captura o id do elemento da vez no laço
        let capturaId = this.id;
        //passa-se o id capturado a armazenado como argumento para a função
        mostraBotao (capturaId);
    })
}

// botões principais
const listaBtnMain = document.querySelectorAll('.btnPrincipais')

// referencia o container pai dos dois tipos de botões, principal e secundários
const containerPaiDosBotoes = document.querySelector('#controlePrincipal');


//----------------------- Cria os botões de cores e atribuem classe -----------------------------

const nomeDasCores = [ 'Azul' , 'Vermelho' , 'Preto' ];
const btnCor = [];

let modalBtnSecundario = null;
let btnModal = null;
//função recebe como argumento o id da lista listaBtnMain 
function mostraBotao (id) {
    if (modalBtnSecundario){
        modalBtnSecundario.remove();
        modalBtnSecundario = null;
        btnModal = null;

    } else {
        modalBtnSecundario = document.createElement('div');
        modalBtnSecundario.classList.add('containerModalBtnSecundario');
        containerPaiDosBotoes.appendChild(modalBtnSecundario);

        // laço para a criação dos botões de cores cores

        for (let i = 0; i < nomeDasCores.length; i++) {
            // Verifica se o botão de cor já foi criado antes
            let corJaAdicionada = btnCor.some(btn => btn.classList.contains(`btn${nomeDasCores[i]}`));
            // se o resultado for diferente de contem:
            if (!corJaAdicionada) {
                btnModal = document.createElement('button');
                btnModal.classList.add(`btn${nomeDasCores[i]}`, 'btnSecundario');
                btnModal.textContent = nomeDasCores[i];
                modalBtnSecundario.appendChild(btnModal);
                btnCor.push(btnModal);
            } else {
                // Se o resultado é diferente de não conter então cria os botões mas não adiciona mais à lista
                btnModal = document.createElement('button');
                btnModal.classList.add(`btn${nomeDasCores[i]}`, 'btnSecundario');
                btnModal.textContent = nomeDasCores[i];
                modalBtnSecundario.appendChild(btnModal);
            }
        
        }
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

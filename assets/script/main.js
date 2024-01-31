// botões principais
const btnDoCorpo = document.querySelector('#btnCorpo');
const btnDoDetalhes = document.querySelector('#btnDetalhes');
const btnDoTampa = document.querySelector('#btnTampa');

// referencia o container pai de dos dois tipos de botões, principal e secundários
const comtainerPaiDosBotoes = document.querySelector('#controlePrincipal');

//cria e adiciona classe a uma div para a lista de botões secundários
const containerBtnSecondarios = document.createElement('div');
containerBtnSecondarios.classList.add('btnSecundariosContainer');

//aray com as cores dos botões secundários
const cores = ['Azul', 'Vermelho', 'Preto'];

//Cria os 3 botões secundários e insere no elemento pai containerBtnSecondarios
function criarBotoesSecundarios () {
    cores.forEach(cor => {
        const btnSecundario = document.createElement('button');
        btnSecundario.classList.add('btnSecundarios' , `btnSecundarios${cor}`);
        
        // adiciona os botões criados no loop dento de um container
        containerBtnSecondarios.appendChild(btnSecundario);
    });

    // adiciona container de botões secundários no container de todos os botões
    comtainerPaiDosBotoes.appendChild(containerBtnSecondarios);
}

function removerBotoesSecundarios() {
    containerBtnSecondarios.remove();
}

// evento para chmamar a função que insere o container e os botões secundários
btnDoCorpo.addEventListener('mouseover' , criarBotoesSecundarios);
btnDoDetalhes.addEventListener('mouseover' , criarBotoesSecundarios);
btnDoTampa.addEventListener('mouseover' , criarBotoesSecundarios);

// evento para remover a função que insere o container e os botões secundários
btnDoCorpo.addEventListener('mouseout' , removerBotoesSecundarios);
btnDoDetalhes.addEventListener('mouseout' , removerBotoesSecundarios);
btnDoTampa.addEventListener('mouseout' , removerBotoesSecundarios);

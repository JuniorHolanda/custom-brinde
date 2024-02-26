// botões principais
const btnDoCorpo = document.querySelector('#btnCorpo');
const btnDoDetalhes = document.querySelector('#btnDetalhes');
const btnDoTampa = document.querySelector('#btnTampa');

// referencia o container pai dos dois tipos de botões, principal e secundários
const containerPaiDosBotoes = document.querySelector('#controlePrincipal');

//cria e adiciona classe a uma div para a lista de botões secundários
const containerBtnSecondarios = document.createElement('div');
containerBtnSecondarios.classList.add('btnSecundariosContainer');

//aray com as cores dos botões secundários
const cores = ['Azul', 'Vermelho', 'Preto'];

let botaoAtivo = null; //armazena o último botão principal clicado


function criarBotoesSecundarios(botaoPrincipal) {
    if (botaoPrincipal !== botaoAtivo) {
        // Se o botão principal clicado for diferente do último botão ativo
        if (botaoAtivo !== null) {
            // Se houver botões secundários ativos, remova-os
            containerPaiDosBotoes.removeChild(containerBtnSecondarios);
        }

        // Crie os botões secundários apenas se o contêiner estiver vazio
        if (containerBtnSecondarios.children.length === 0) {
            cores.forEach(cor => {
                const btnSecundario = document.createElement('button');
                btnSecundario.classList.add('btnSecundarios', `btnSecundarios${cor}`);
                containerBtnSecondarios.appendChild(btnSecundario);
            });

            // Adicione a caixa de botões secundários ao contêiner pai
            containerPaiDosBotoes.appendChild(containerBtnSecondarios);
        }

        // Atualize o botão ativo
        botaoAtivo = botaoPrincipal;
    }
}



// Adiciona ouvintes de eventos para os botões principais
btnDoCorpo.addEventListener('click', function() {
    criarBotoesSecundarios(btnDoCorpo);
});
btnDoDetalhes.addEventListener('click', function() {
    criarBotoesSecundarios(btnDoDetalhes);
});
btnDoTampa.addEventListener('click', function() {
    criarBotoesSecundarios(btnDoTampa);
});
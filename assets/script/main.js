// botões principais
const btnDoCorpo = document.querySelector('#btnCorpo');
const btnDoDetalhes = document.querySelector('#btnDetalhes');
const btnDoTampa = document.querySelector('#btnTampa');

// Obtém a referência do painel de controle
const controleSecundario = document.querySelector('#controlePrincipal');

// container de botões de cores inserido dinamicamente
const btnSecundarios = document.createElement('div');
btnSecundarios.classList.add('btnSecundariosContainer');

//array de cores
const cores = ['Azul','Vermelho','Preto'];

// função para criar e adicionando botões ao container dinamicamente
function criarBotoes() {
    cores.forEach (cor => {
    const btn = document.createElement('button');
    btn.classList.add('btnSecundarios');
    btn.textContent = cor;
    btnSecundarios.appendChild(btn);
    });
}

// função para remover os botões
function removerBotoes(){
    btnSecundarios.innerHTML = '';
}

// Evento para acionar a criação dos botões quando o mouse está sobre um botão principal
btnDoCorpo.addEventListener('mouseover', criarBotoes);
btnDoDetalhes.addEventListener('mouseover', criarBotoes);
btnDoTampa.addEventListener('mouseover', criarBotoes);

// Evento para remover botões quando o mouse está fora de um botão principal
btnDoCorpo.addEventListener('mouseout', removerBotoes);
btnDoDetalhes.addEventListener('mouseout', removerBotoes);
btnDoTampa.addEventListener('mouseout', removerBotoes);

// Insere o btnSecundarios dentro da Div controlePrincipal, em baixo da btnPrincipaisContainer
controleSecundario.insertAdjacentElement('beforeend', btnSecundarios);
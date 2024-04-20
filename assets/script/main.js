// botões principais
const listaBtnMain = document.querySelectorAll('.btnPrincipais')

// referencia o container pai dos dois tipos de botões, principal e secundários
const containerPaiDosBotoes = document.querySelector('#controlePrincipal');

//cria e adiciona classe a uma div para a lista de botões secundários
const containerBtnSecondarios = document.createElement('div');
containerBtnSecondarios.classList.add('btnSecundariosContainer');

//aray com as cores dos botões secundários
const cores = ['Azul', 'Vermelho', 'Preto'];

for (i=0; i < listaBtnMain.length; i++){
    
    function mostraId (id) {
        console.log(id)
    }
}


listaBtnMain.addEventListener('click', function() {
    mostraId()
});


let scrollPosition = 0;
let posicaoCaixaBtn = document.querySelector('.containerBTN')
let caixaVisivel = document.querySelector('#caixaBtn')

//----------------INÍCIO BOTÕES--------------------------------------
let listBtnDestaque = document.querySelectorAll('.btnDestaqueItem')
let listBtnCor = document.querySelector('.btnCor');
//----------------FIM BOTÕES-----------------------------------------


let parteCorpo = document.querySelector('.mudaCorpo')
let parteTampa = document.querySelector('.mudaTampa')
let parteDetalhes = document.querySelector('.mudaDetalhe')



window.addEventListener('scroll', function () {
    scrollPosition = this.window.scrollY;
    parteCorpo.style.filter = 'hue-rotate(' + scrollPosition / 4 + 'deg)';
    parteTampa.style.filter = 'hue-rotate(' + scrollPosition / 3.8 + 'deg)';
})



   


listBtnDestaque[0].addEventListener('mouseover' , function () {
    caixaVisivel.classList.remove('some');
    caixaVisivel.style.left = 0
})

listBtnDestaque[0].addEventListener('mouseout' , function () {
    
    caixaVisivel.classList.add('some');
    
})

listBtnDestaque[1].addEventListener('mouseover' , function () {
    caixaVisivel.classList.remove('some');
    caixaVisivel.style.left = '14.5rem'
})

listBtnDestaque[1].addEventListener('mouseout' , function () {
    caixaVisivel.classList.add('some');
})

listBtnDestaque[2].addEventListener('mouseover' , function () {
    caixaVisivel.classList.remove('some');
    caixaVisivel.style.left = '29.5rem'
})

listBtnDestaque[2].addEventListener('mouseout' , function () {
    caixaVisivel.classList.add('some');
})




/*

function position (btnClicado) {
    
    posicaoCaixaBtn.style.alignItems = btnClicado
    
    if (posicaoCaixaBtn.style.alignItems === btnClicado) {
        caixaVisivel.style.opacity = 1
    } else if (posicaoCaixaBtn.mouseover != true) {
        caixaVisivel.style.opacity = 0
    }
}

listBtnDestaque[0].addEventListener('click', function () {
    position ('flex-start')
})

listBtnDestaque[1].addEventListener('click', function () {
    position ('center')
})

listBtnDestaque[2].addEventListener('click', function () {
    position ('flex-end')
})

















function moveCaixa (posicao) {
    posicaoCaixaBtn.style.alignItems = posicao;
}



// inicio botao detalhe

btnCorpo.addEventListener('mouseover', function () {
    moveCaixa('flex-start');
    caixaVisivel.style.opacity = '100%';
});

btnCorpo.addEventListener('mouseout', function () {
    moveCaixa('center');
    caixaVisivel.style.opacity = '0';
});

// inicio botao detalhe

btnDetalhe.addEventListener('mouseover' , function () {
    moveCaixa ('flex-end');
    caixaVisivel.style.opacity = '100%';
})

btnDetalhe.addEventListener('mouseout' , function () {
    moveCaixa ('center');
    caixaVisivel.style.opacity = '0';
})

*/
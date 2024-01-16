/*  telaGira = captura valores do scroll
    valor.mudaMatiz =  muda a matiz  -> filter: hue-rotate(deg)
    
    criar uma funcao que altera o hue-rotate de 0 a 360.
    valor.mudaMatiz = telaGira

*/


function moveCaixa (frase) {
    posicaoCaixaBtn.style.alighItens = `${frase}`

}




let scrollPosition = 0;
let posicaoCaixaBtn = document.querySelector('.containerBTN')

//----------------INÍCIO BOTÕES CORES-------------------

let btnVermelho = document.querySelector('.btnVermelho');
let btnAzul = document.querySelector('.btnAzul');
let btnPreto = document.querySelector('.btnPreto');

//----------------INÍCIO BOTÕES DESTAQUE----------------

let btnCorpo = document.querySelector('#btnCorpo');
let btnTampa = document.querySelector('#btnTampa');
let btnDetalhe = document.querySelector('#btnDetalhe');

//--------------INÍCIO SOBREPOSICAO IMAGENS-------------

let parteCorpo = document.querySelector('.mudaCorpo')
let parteTampa = document.querySelector('.mudaTampa')
let parteDetalhes = document.querySelector('.mudaDetalhe')


par

window.addEventListener('scroll', function () {
    scrollPosition = this.window.scrollY;
    parteCorpo.style.filter = 'hue-rotate(' + scrollPosition / 4 + 'deg)'
    parteTampa.style.filter = 'hue-rotate(' + scrollPosition / 3.8 + 'deg)'
})


btnVermelho.addEventListener

/*
let scrollPosition = 0;
let parteCorpo = document.querySelector('.mudaCorpo');

window.addEventListener('scroll', function () {
    scrollPosition = window.scrollY;
    
});

console.log(scrollPosition);
*/



/*
temos as 3 partes referenciadas
preciso dos 3 botoes referenciado (Não sei se en lista ou individualmente)
preciso de um event listener que pegue o btn a cor escolhida e mude a cor da parte


havera apenas 1 div com os botões
está div deve responder de de forma dinamica ***PARAMETROS*** 

eu tenho 3 botões
cada 1 deles passa o mesmo comando para imagens diferentes
o que deve mudar é o parametro


let btnCorpo = document.querySelector('.btnVermelho');
let btnCorpo = document.querySelector('.btnAzul');
let btnCorpo = document.querySelector('.btnPreto');



function (frase) {
    frase.style.filter = 'hue-rotate('4deg)'
})
}



*/
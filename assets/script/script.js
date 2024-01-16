/*  telaGira = captura valores do scroll
    valor.mudaMatiz =  muda a matiz  -> filter: hue-rotate(deg)
    
    criar uma funcao que altera o hue-rotate de 0 a 360.
    valor.mudaMatiz = telaGira

*/
let scrollPosition = 0;
let parteCorpo = document.querySelector('.mudaCorpo')
let parteTampa = document.querySelector('.mudaTampa')
let parteDetalhes = document.querySelector('.mudaDetalhe')

window.addEventListener('scroll', function () {
    scrollPosition = this.window.scrollY;
    parteCorpo.style.filter = 'hue-rotate(' + scrollPosition / 4 + 'deg)'
    parteTampa.style.filter = 'hue-rotate(' + scrollPosition / 4 + 'deg)'
})


/*
let scrollPosition = 0;
let parteCorpo = document.querySelector('.mudaCorpo');

window.addEventListener('scroll', function () {
    scrollPosition = window.scrollY;
    
});

console.log(scrollPosition);
*/
// quando mouse passar sobre botão, botão = destaque e mostrar balão com botão de cores
// enquanto mouse estiver sobre o botão ou sobre o balão o mesmo deve permanecer na tela, e desaparecer quando o mouse sair de cima de um dos dois.




const listaBtnDestaque = document.querySelectorAll('.listaBtnDestaque')
const listaPartesProdutoBtn = document.querySelectorAll('.btnComponentesProduto');

listaPartesProdutoBtn[0].addEventListener('mouseover', function (){
    this.style.backgroundColor = '#fc5b5b';
    listaBtnDestaque[0].classList.remove('listaBtnDestaque')

})

listaPartesProdutoBtn[0].addEventListener('mouseout' , function () {
   
    listaBtnDestaque[0].classList.add('listaBtnDestaque')
    this.style.backgroundColor = '#d9d9d9';
})

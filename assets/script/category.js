import { bolsa } from './object.js';
import { necessaire } from './object.js';
import { estojo } from './object.js';
import { mala } from './object.js';
import { carteira } from './object.js';
import { termica } from './object.js';
import { mochila } from './object.js';
import { portaBloco } from './object.js';
import { diversos } from './object.js';

// Mapeamento de IDs para as listas importadas
const productCategories = {
    bolsa,
    necessaire,
    estojo,
    mala,
    carteira,
    termica,
    mochila,
    portaBloco,
    diversos
};

//referencia as categorias
const domCategory = document.querySelectorAll('.category');

//referencia o container dos produtos
const containerForMain = document.querySelector('#containerForMain');

//cria um container para os produtos da categoria
const containerMockup =  document.createElement('div');
containerMockup.classList.add('container-mockup')


function showProductCategory (id) {
    // Verifica se o ID passado existe no mapeamento
    if (id in productCategories) {
        // Acessa a lista de produtos com base no ID
        const productList = productCategories[id];

        for(let i = 0; i < productList.length; i++){

            //cria o card com a imagem do produto
            const cardProdduct = document.createElement('div');
            cardProdduct.classList = 'list-products';
            
            //cria a img do prododuto
            const cardImg = document.createElement('img');
            cardImg.classList = 'list-product-img';
            //referencia o caminho do produto baseado na propriedade card do objeto iterado
            cardImg.src = productList[i].card
           
            //inclui a imagem no card
            cardProdduct.appendChild(cardImg);
           
            //inclui o card no containerMockup
            containerMockup.appendChild(cardProdduct);

            //inclui o container mockup no containerForMain
            containerForMain.appendChild(containerMockup)
        }
    }
}

for (let i = 0; i < domCategory.length; i++) {

    let btnCategory = domCategory[i]
    btnCategory.addEventListener('click' , function () {
        //captura o id do elemento da vez no laço
        let capturaId = this.id;
        showProductCategory(capturaId)
    })
}


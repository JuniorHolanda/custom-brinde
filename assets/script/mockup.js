
//importa o container dos produtos
import { containerForMain } from "./category.js";
import { createBtnColor } from "./editColorsMockup.js";

//cria o container para as imagens do mockup
const containerMockup = document.createElement('div');
containerMockup.classList.add('container-mockup');

//referencia o container para os botões de controle
export const controlForProducts = document.querySelector('#controlForProducts');

//cria o container para as imagens do mockup
const containerBtnPartProduct = document.createElement('div');
containerBtnPartProduct.classList.add('btn-party-edit');
containerMockup.classList.add('container-btn-product-part');

//cria o container para as imagens do mockup
let btnPartProduct = null;

//passa dinâmicamente os caminhos das imagens para as partes do produto e mostra no containerMain
export function showMockup (ajuste , corpo , bolso , alca , ziper , vivo , tampa , debrum , base) {

    // lista com as partes dos produtos
    const listMockupPart = [ ajuste , corpo , bolso , alca , ziper , vivo , tampa , debrum , base ];
    
    // limpa o container principal para adicionar o mockup
    if (containerForMain.childElementCount > 0) {
        containerForMain.innerHTML = ''
        
        // itera sobre a listMockupPart e cria uma imagem pra cada e insere no containerMockup
        const ChildContainerBtn = containerBtnPartProduct.childElementCount
        

        if (ChildContainerBtn > 0) {
            console.log('limpou');
            ChildContainerBtn = 0

        } else{

            
        for (let i = 0; i < listMockupPart.length ; i++) {

            if (listMockupPart[i] !== '') {
                const imgMockup = document.createElement('img');
                imgMockup.src = listMockupPart[i];
                imgMockup.classList.add('img-mockup');
                containerMockup.appendChild(imgMockup);
                containerForMain.appendChild(containerMockup);
    
                //remove o parametro ajuste e segue o fluxo
                if (listMockupPart[i] !== ajuste && containerBtnPartProduct.childElementCount < listMockupPart.length ){
                        // CHAT GPT - Extrai apenas o nome da parte do produto do caminho do arquivo 
                    const fileName = listMockupPart[i].split('/').pop().split('.')[0];
                    
                        //cria botões de edição para cada parte que for diferente de vazio
                    btnPartProduct = document.createElement('button');
                    btnPartProduct.classList.add('btn-party')
                    btnPartProduct.textContent = fileName;
                    containerBtnPartProduct.appendChild(btnPartProduct)
                    controlForProducts.appendChild(containerBtnPartProduct);
                    btnPartProduct.addEventListener('click' , () => createBtnColor (fileName));
                } else if (listMockupPart[i] !== '') {
                    //console.log('remover');
                }
            }
        }
        }
    }
}
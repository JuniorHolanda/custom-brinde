import { controlForProducts } from "./mockup.js";

const listBtnColor = ['vermelho' , 'royal' , 'amarelo' , 'roxo' , 'preto']; 
const containerBtnColors = document.createElement('div');
containerBtnColors.classList.add('container-btn-colors')

export function createBtnColor (imagem) {
    const listImgPart = document.querySelectorAll('.img-mockup');

    // iteração sobre a lista com as partes do produto

    function changeColorPartProduct (color) {

        //itera sobre a lista com partes do produto, captura seu .src em uma variável e compara se dentro dele está incluso o imagem
        for (let i = 0; i < listImgPart.length; i++){
            const nameProduct = listImgPart[i].src
            if (nameProduct.includes(imagem)){
                listImgPart[i].classList.add(`color-part-${color}`)
            }
        }

    }


    // itera sobre o listBtnColor e cria os botões de cores
    for (let i = 0; i < listBtnColor.length; i++){
        const btnColor = document.createElement('button');
        btnColor.textContent = listBtnColor[i];
        btnColor.classList.add(`btn-color-${listBtnColor[i]}`);
        containerBtnColors.appendChild(btnColor);
        controlForProducts.appendChild(containerBtnColors);
        btnColor.addEventListener('click' , () => changeColorPartProduct (listBtnColor[i]));
    }
}
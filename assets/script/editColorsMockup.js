import { controlForProducts } from "./mockup.js";

const listBtnColor = ['Vermelho' , 'Azul' , 'Amarelo']; 
const containerBtnColors = document.createElement('div');
containerBtnColors.classList.add('container-btn-colors')

export function createBtnColor (imagem) {
    const listImgPart = document.querySelectorAll('.img-mockup')

    function changeColorPartProduct (color) {
        for (let i = 0; i < listImgPart.length; i++){
            const imgPart = listImgPart[i]
            imgPart.classList.add(color)
            console.log(imgPart)
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
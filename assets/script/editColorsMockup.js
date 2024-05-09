import { controlForProducts } from "./mockup.js";

const listBtnColor = ['Vermelho' , 'Azul' , 'Amarelo']; 
const containerBtnColors = document.createElement('div');

export function createBtnColor (imagem) {
    const imgPart = document.querySelectorAll('.img-mockup')

    function changeColorPartProduct (color) {
        imgPart[3].classList.add('muda-cor')
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






/*




// itera sobre o listBtnColor e cria os botões de cores
for (let i = 0; i < listBtnColor.length; i++){
    createBtnColor(listBtnColor[i])
}


*/
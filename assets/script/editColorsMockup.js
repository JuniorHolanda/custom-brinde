//cria lista com nome das cores
const listBtnColor = ['Vermelho' , 'Azul' , 'Amarelo'];

export function createBtnColor (cor) {
    const btnColor = document.createElement('button');
    btnColor.textContent = cor
    btnColor.classList.add(`btn-color-${cor}`);
    console.log(btnColor.classList);
}

// itera sobre o listBtnColor e cria os botões de cores
for (let i = 0; i < listBtnColor.length; i++){
    createBtnColor(listBtnColor[i])
}
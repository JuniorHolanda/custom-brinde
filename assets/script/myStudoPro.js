import { product} from './object.js';

const containerMockup = document.querySelector('#containerForProduct');
const btnAbrirMockup = document.querySelector('#abrirMockup')

for (let i = 0; i < product.length; i++) {
    function mockup () {
        let imgAjuste = document.createElement('img')
        imgAjuste.src = product[i].ajuste
        containerMockup.appendChild(imgAjuste)
    }
}


btnAbrirMockup.addEventListener('click' , function () {
    mockup()
})

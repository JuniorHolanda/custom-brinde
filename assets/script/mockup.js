
//importa o container dos produtos
import { containerForMain } from "./category.js";

//cria o container para as imagens do mockup
const containerMockup = document.createElement('div');
containerMockup.classList.add('container-mockup');

const Ajuste = document.createElement('img');
const Corpo = document.createElement('img');
const Bolso = document.createElement('img');
const Alca = document.createElement('img');
const Ziper = document.createElement('img');
const Vivo = document.createElement('img');
const Tampa = document.createElement('img');
const Debrum = document.createElement('img');
const Base = document.createElement('img');


export function showMockup (idMockup) {

    // limpa o container principal para adicionar o mockup
    containerForMain.innerHTML = ''

    const listMockupPart = [ 'ajuste' , 'corpo' , 'bolso' , 'alca' , 'ziper' , 'vivo' , 'tampa' , 'debrum' , 'base' ];

for (let i = 0; i < listMockupPart.length; i++) {
    const imgMockup = document.createElement('img')
    imgMockup.src = `${idMockup}.${listMockupPart[i]}`;



        // imagens das partes do produto
        
        Ajuste.src =  idMockup.ajuste;
        Ajuste.classList.add('img-mockup')

        Corpo.src = idMockup.corpo;
        Corpo.classList.add('img-mockup')

        Bolso.src = idMockup.bolso
        Bolso.classList.add('img-mockup')

        Alca.src = idMockup.alca
        Alca.classList.add('img-mockup')

        Ziper.src = idMockup.ziper
        Ziper.classList.add('img-mockup')

        Vivo.src = idMockup.vivo
        Vivo.classList.add('img-mockup')

        Tampa.src = idMockup.tampa
        Tampa.classList.add('img-mockup')

        Debrum.src = idMockup.debrum
        Debrum.classList.add('img-mockup')

        Base.src = idMockup.base
        Base.classList.add('img-mockup')

        //adiciona os itens aos mockup
        containerMockup.appendChild(Ajuste);
        containerMockup.appendChild(Corpo);
        containerMockup.appendChild(Bolso);
        containerMockup.appendChild(Alca);
        containerMockup.appendChild(Ziper);
        containerMockup.appendChild(Vivo);
        containerMockup.appendChild(Tampa);
        containerMockup.appendChild(Debrum);

        //adiciona o containerMockup ao container principal
        containerForMain.appendChild(containerMockup);

}
   
}   /*
    console.log(idMockup.ajuste)
    console.log(idMockup.corpo)
    console.log(idMockup.bolso)
    console.log(idMockup.alca)
    console.log(idMockup.ziper)
    console.log(idMockup.vivo)
    console.log(idMockup.tampa)
    console.log(idMockup.debrum)
    console.log(idMockup.base)
    */
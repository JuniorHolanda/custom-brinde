
//importa o container dos produtos
import { containerForMain } from "./category.js";

//cria o container para as imagens do mockup
const containerMockup = document.createElement('div');
containerMockup.classList.add('container-mockup');

//passa dinâmicamente os caminhos das imagens para as partes do produto e mostra no containerMain
export function showMockup (ajuste , corpo , bolso , alca , ziper , vivo , tampa , debrum , base) {

    // lista com as partes dos produtos
    const listMockupPart = [ ajuste , corpo , bolso , alca , ziper , vivo , tampa , debrum , base ];
    
    // limpa o container principal para adicionar o mockup
    containerForMain.innerHTML = ''

    // itera sobre a listMockupPart e cria uma imagem pra cada e insere no containerMockup
    for (let i = 0; i < listMockupPart.length ; i++) {
        const imgMockup = document.createElement('img')
        imgMockup.src = listMockupPart[i]
        imgMockup.classList.add('img-mockup')
        containerMockup.appendChild(imgMockup)
        containerForMain.appendChild(containerMockup)
    }


















        /* imagens das partes do produto
        
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

        adiciona os itens aos mockup
        containerMockup.appendChild(Ajuste);
        containerMockup.appendChild(Corpo);
        containerMockup.appendChild(Bolso);
        containerMockup.appendChild(Alca);
        containerMockup.appendChild(Ziper);
        containerMockup.appendChild(Vivo);
        containerMockup.appendChild(Tampa);
        containerMockup.appendChild(Debrum);

        adiciona o containerMockup ao container principal
        containerForMain.appendChild(containerMockup);
        */
   
}
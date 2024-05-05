
//importa o container dos produtos
import { containerForMain } from "./category.js";

//cria o container para as imagens do mockup
const containerMockup = document.createElement('div');
containerMockup.classList.add('container-mockup')


export function showMockup (idMockup) {
    // limpa o container principal para adicionar o mockup
    containerForMain.innerHTML = ''

    // imagens das partes do produto
    const mockupAjuste = document.createElement('img');
    mockupAjuste.src =  idMockup.ajuste;
    mockupAjuste.classList.add('img-mockup')

    const mockupCorpo = document.createElement('img');
    mockupCorpo.src = idMockup.corpo;
    mockupCorpo.classList.add('img-mockup')

    const mockupBolso = document.createElement('img');
    mockupBolso.src = idMockup.bolso
    mockupBolso.classList.add('img-mockup')

    const mockupAlca = document.createElement('img');
    mockupAlca.src = idMockup.alca
    mockupAlca.classList.add('img-mockup')

    const mockupZiper = document.createElement('img');
    mockupZiper.src = idMockup.ziper
    mockupZiper.classList.add('img-mockup')

    const mockupVivo = document.createElement('img');
    mockupVivo.src = idMockup.vivo
    mockupVivo.classList.add('img-mockup')

    const mockupTampa = document.createElement('img');
    mockupTampa.src = idMockup.tampa
    mockupTampa.classList.add('img-mockup')

    const mockupDebrum = document.createElement('img');
    mockupDebrum.src = idMockup.debrum
    mockupDebrum.classList.add('img-mockup')

    const mockupBase = document.createElement('img');
    mockupBase.src = idMockup.base

    //adiciona os itens aos mockup
    containerMockup.appendChild(mockupAjuste);
    containerMockup.appendChild(mockupCorpo);
    containerMockup.appendChild(mockupBolso);
    containerMockup.appendChild(mockupAlca);
    containerMockup.appendChild(mockupZiper);
    containerMockup.appendChild(mockupVivo);
    containerMockup.appendChild(mockupTampa);
    containerMockup.appendChild(mockupDebrum);
    containerMockup.appendChild(mockupDebrum);

    //adiciona o containerMockup ao container principal
    containerForMain.appendChild(containerMockup);
   
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
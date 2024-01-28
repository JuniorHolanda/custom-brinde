// botões principais
const btnDoCorpo = document.querySelector('#btnCorpo');
const btnDoDetalhes = document.querySelector('#btnDetalhes');
const btnDoTampa = document.querySelector('#btnTampa');

// container de botões de cores inserido dinamicamente
const btnSecundarios = document.createElement('div');
btnSecundarios.classList.add('btnSecundariosContainer');

// botões de cores inserido dinamicamente
const btnAzul = document.createElement('button');
btnAzul.classList.add('btnSecundarios');

const btnVermelho = document.createElement('button');
btnVermelho.classList.add('btnSecundarios');

const btnPreto = document.createElement('button') ;
btnPreto.classList.add('btnSecundarios');

btnSecundarios.appendChild(btnAzul)
btnSecundarios.appendChild(btnVermelho)
btnSecundarios.appendChild(btnPreto)
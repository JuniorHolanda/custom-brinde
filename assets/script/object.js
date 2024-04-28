class MoldProduct {
    constructor(nome, medidas, ajuste, corpo, alca, ziper, vivo, tampa, debrum, base ) {
        this.nome = nome;
        this.medidas = medidas;
        this.ajuste = ajuste;
        this.corpo = corpo;
        this.alca = alca;
        this.ziper = ziper;
        this.vivo = vivo;
        this.tampa = tampa;
        this.debrum = debrum;
        this.base = base;
    }
}

// Lista com os produtos para serem iterados, as pastas com as partes do produtos devem ser nomeadas em camelCase e identica aos itens deste array, AJUSTE DENTRO DAS CONDIÇÕES DA REPETIÇÃO
const listProduct = [
    'bolsaPraiaDuo',
    'bolsaPst',
    'estojoTriang',
    'miniBagVani',
    'necEvBolso',
    'termicaJl'];

// sempre que adicionar um produto é necessário adicionar a medida, seguindo a ordem cronológica
const medidas = [
    'Lar - 10cm | Alt - 00cm | Comp - 00cm',
    'Lar - 20cm | Alt - 00cm | Comp - 00cm',
    'Lar - 30cm | Alt - 00cm | Comp - 00cm',
    'Lar - 40cm | Alt - 00cm | Comp - 00cm',
    'Lar - 50cm | Alt - 00cm | Comp - 00cm',
    'Lar - 60cm | Alt - 00cm | Comp - 00cm',
]

// lista com os objetos criados na iteração.
export const product = [];


for (let i = 0; i < listProduct.length; i++){
    // proriedade comum a todos os objetos 
    const nome = listProduct[i];
    const medida = medidas[i]
    const ajuste = `assets/img/${nome}/ajuste.jpg`;
    const corpo = `assets/img/${nome}/corpo.png`;

    // propriedades que variam nos objetos
    let alca = '';
    let ziper = '';
    let vivo = '';
    let tampa = '';
    let debrum = '';
    let base = '';

    // adiciona alça aos aos produtos relativos
    if (nome === 'bolsaPraiaDuo' || nome === 'bolsaPst' || nome === 'miniBagVani'){
        alca = `assets/img/${nome}/alca.png`
    }

    // adiciona ziper aos aos produtos relativos
    if (nome === 'estojoTriang' || nome === 'miniBagVani' || nome === 'necEvBolso' || nome === 'termicaJl' ){
        ziper = `assets/img/${nome}/ziper.png`
    }

     // adiciona vivo aos aos produtos relativos
     if (nome === 'termicaJl'){
        vivo = `assets/img/${nome}/vivo.png`
     }

     // adiciona tampa aos aos produtos relativos
     if (nome === 'termicaJl'){
        tampa = `assets/img/${nome}/tampa.png`
     }

     // adiciona debrum aos aos produtos relativos
     if (nome === 'bolsaPraiaDuo'){
        debrum = `assets/img/${nome}/debrum.png`
     }

     // adiciona base aos aos produtos relativos
     if (nome === 'bolsaPraiaDuo'){
        base = `assets/img/${nome}/base.png`
     }

    const newProduct = new MoldProduct (nome , medida , ajuste , corpo , alca, ziper, vivo, tampa, debrum , base);

    product.push(newProduct);
}
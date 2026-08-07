const produtos = [{
    id: 1,
    nome: "Kit Limpeza",
    categoria: "Kits",
    preco: 89.90,
    precoAntigo: 109.90,
    imagem: "assets/img/kit-limpeza.png",
    descricao: "Produtos essenciais para manter sua casa limpa e organizada.",
    itens: [
        "Sabão em Pó",
        "Amaciante",
        "Água Sanitária",
        "Desinfetante",
        "Detergente",
        "Limpador Multiuso",
        "Álcool 70%",
        "Esponja",
        "Lã de Aço",
        "Pano de Chão",
        "Saco de Lixo"
    ]
},

{
    id: 2,
    nome: "Kit Higiene",
    categoria: "Kits",
    preco: 79.90,
    precoAntigo: 99.90,
    imagem: "assets/img/kit-higiene.png",
    descricao: "Itens de higiene pessoal para toda a família.",
    itens: [
        "Sabonete",
        "Creme Dental",
        "Escova de Dente",
        "Shampoo",
        "Condicionador",
        "Desodorante",
        "Papel Higiênico",
        "Algodão",
        "Cotonetes",
        "Aparelho de Barbear"
    ]
},

{
    id: 3,
    nome: "Cesta Café da Manhã",
    categoria: "Kits",
    preco: 119.90,
    precoAntigo: 139.90,
    imagem: "assets/img/cafe-manha.png",
    descricao: "Tudo para começar o dia com um café da manhã completo.",
    itens: [
        "Café",
        "Açúcar",
        "Leite em Pó",
        "Achocolatado",
        "Biscoito Maizena",
        "Biscoito Recheado",
        "Torradas",
        "Goiabada",
        "Doce de Leite",
        "Chá",
        "Cereal"
    ]
},

{
    id: 4,
    nome: "Cesta Família",
    categoria: "Mais Vendidos",
    preco: 329.90,
    precoAntigo: 379.90,
    imagem: "assets/img/cesta-familia.png",
    descricao: "Nossa cesta mais completa, ideal para famílias grandes.",
    itens: [
        "Arroz",
        "Feijão",
        "Açúcar",
        "Óleo",
        "Café",
        "Macarrão",
        "Molho de Tomate",
        "Farinha",
        "Farinha de Mandioca",
        "Fubá",
        "Leite em Pó",
        "Achocolatado",
        "Biscoitos",
        "Sardinha",
        "Milho",
        "Ervilha",
        "Goiabada",
        "Gelatina",
        "Tempero",
        "Vinagre",
        "Papel Higiênico",
        "Sabonete",
        "Creme Dental",
        "Detergente",
        "Esponja",
        "Sabão em Barra",
        "Sabão em Pó",
        "Água Sanitária"
    ]
},

{
    id: 5,
    nome: "Cesta Média",
    categoria: "Mais Vendidas",
    preco: 219.90,
    precoAntigo: 259.90,
    imagem: "assets/img/cesta-empresarial.png",
    descricao: "Ideal para empresas, brindes corporativos e benefícios aos colaboradores.",
    itens: [
        "Arroz",
        "Feijão",
        "Açúcar",
        "Óleo",
        "Café",
        "Macarrão",
        "Molho de Tomate",
        "Farinha",
        "Sal",
        "Achocolatado",
        "Biscoito",
        "Sardinha",
        "Papel Higiênico",
        "Creme Dental",
        "Sabonete"
    ]
}, {
    id: 6,
    nome: "Cesta Básica",
    categoria: "Mais Vendidos",
    preco: 140.00,
    precoAntigo: 159.90,
    imagem: "assets/img/cesta-basica.png",
    descricao: "Cesta básica com produtos essenciais para o dia a dia da sua família.",
    itens: [
        "Arroz",
        "Feijão",
        "Açúcar",
        "Óleo",
        "Macarrão",
        "Farinha",
        "Sal",
        "Café",
        "Molho de Tomate",
        "Biscoito",
        "Tempero",
        "Fubá"
    ]
}
]
const kits = produtos.filter((produto) => {
    return produto.categoria === "Kits"
})
const maisVendidos = produtos.filter((produto) => {
    return produto.categoria === "Mais Vendidos"
})


function renderizarProdutos() {

    let grid = document.getElementById("grid-produtos");
    grid.innerHTML = "";

    for (let c = 0; c < produtos.length; c++) {

        grid.innerHTML += `
            <article class="product-card">
                <div class="product-card__img-container">
                    <div class="product-card__img">
                        <img src="${produtos[c].imagem}" alt="${produtos[c].nome}">
                    </div>
                </div>

                <div class="product-card__content">

                    <h3 class="product-card__title">${produtos[c].nome}</h3>

                    <p class="product-card__desc">
                        ${produtos[c].descricao}
                    </p>

                    <ul class="product-card__list-short">
                        <li>${produtos[c].itens[0]}</li>
                        <li>${produtos[c].itens[1]}</li>
                        <li>${produtos[c].itens[2]}</li>
                        <li>+ ${produtos[c].itens.length - 3} itens</li>
                    </ul>

                    <div class="product-card__price-box">
                        <s class="price-old">
                            R$ ${produtos[c].precoAntigo.toFixed(2).replace(".", ",")}
                        </s>

                        <span class="price-main">
                            R$ ${produtos[c].preco.toFixed(2).replace(".", ",")}
                        </span>
                    </div>

                    <div class="product-card__shipping">
                        <i class="fa-solid fa-motorcycle"></i>
                        Taxa de entrega — R$ 15,00
                    </div>

                    <div class="product-card__actions">

                        <label for="modal-produto" class="btn btn--outline btn--block">
                            <i class="fa-solid fa-list"></i>
                            Ver Itens
                        </label>

                        <button class="btn btn--primary btn--block">
                            <i class="fa-solid fa-cart-plus"></i>
                            Adicionar
                        </button>

                        <a href="#whatsapp" class="btn btn--whatsapp btn--block">
                            <i class="fa-brands fa-whatsapp"></i>
                            Comprar pelo WhatsApp
                        </a>

                    </div>

                </div>
            </article>
        `;
    }
}

function renderizarkits() {

    let grid = document.getElementById("grid-kits");
    grid.innerHTML = ``;

    for (let c = 0; c < kits.length; c++) {

        grid.innerHTML += `
            <article class="product-card">
                <div class="product-card__img-container">
                    <div class="product-card__img">
                        <img src="${kits[c].imagem}" alt="${kits[c].nome}">
                    </div>
                </div>

                <div class="product-card__content">

                    <h3 class="product-card__title">${produtos[c].nome}</h3>

                    <p class="product-card__desc">
                        ${kits[c].descricao}
                    </p>

                    <ul class="product-card__list-short">
                        <li>${kits[c].itens[0]}</li>
                        <li>${kits[c].itens[1]}</li>
                        <li>${kits[c].itens[2]}</li>
                        <li>+ ${kits[c].itens.length - 3} itens</li>
                    </ul>

                    <div class="product-card__price-box">
                        <s class="price-old">
                            R$ ${kits[c].precoAntigo.toFixed(2).replace(".", ",")}
                        </s>

                        <span class="price-main">
                            R$ ${kits[c].preco.toFixed(2).replace(".", ",")}
                        </span>
                    </div>

                    <div class="product-card__shipping">
                        <i class="fa-solid fa-motorcycle"></i>
                        Taxa de entrega — R$ 15,00
                    </div>

                    <div class="product-card__actions">

                        <label for="modal-produto" class="btn btn--outline btn--block">
                            <i class="fa-solid fa-list"></i>
                            Ver Itens
                        </label>

                        <button class="btn btn--primary btn--block">
                            <i class="fa-solid fa-cart-plus"></i>
                            Adicionar
                        </button>

                        <a href="#whatsapp" class="btn btn--whatsapp btn--block">
                            <i class="fa-brands fa-whatsapp"></i>
                            Comprar pelo WhatsApp
                        </a>

                    </div>

                </div>
            </article>
        `;
    }
}


function renderizarDestaques() {

    let grid = document.getElementById("grid-Destaques");
    grid.innerHTML = "";

    for (let c = 0; c < maisVendidos.length; c++) {

        grid.innerHTML += `
            <article class="product-card">
                <div class="product-card__img-container">
                    <div class="product-card__img">
                        <img src="${maisVendidos[c].imagem}" alt="${maisVendidos[c].nome}">
                    </div>
                </div>

                <div class="product-card__content">

                    <h3 class="product-card__title">${maisVendidos[c].nome}</h3>

                    <p class="product-card__desc">
                        ${maisVendidos[c].descricao}
                    </p>

                    <ul class="product-card__list-short">
                        <li>${maisVendidos[c].itens[0]}</li>
                        <li>${maisVendidos[c].itens[1]}</li>
                        <li>${maisVendidos[c].itens[2]}</li>
                        <li>+ ${maisVendidos[c].itens.length - 3} itens</li>
                    </ul>

                    <div class="product-card__price-box">
                        <s class="price-old">
                            R$ ${maisVendidos[c].precoAntigo.toFixed(2).replace(".", ",")}
                        </s>

                        <span class="price-main">
                            R$ ${maisVendidos[c].preco.toFixed(2).replace(".", ",")}
                        </span>
                    </div>

                    <div class="product-card__shipping">
                        <i class="fa-solid fa-motorcycle"></i>
                        Taxa de entrega — R$ 15,00
                    </div>

                    <div class="product-card__actions">

                        <label for="modal-produto" class="btn btn--outline btn--block">
                            <i class="fa-solid fa-list"></i>
                            Ver Itens
                        </label>

                        <button class="btn btn--primary btn--block">
                            <i class="fa-solid fa-cart-plus"></i>
                            Adicionar
                        </button>

                        <a href="#whatsapp" class="btn btn--whatsapp btn--block">
                            <i class="fa-brands fa-whatsapp"></i>
                            Comprar pelo WhatsApp
                        </a>

                    </div>

                </div>
            </article>
        `;
    }
}
renderizarDestaques()
renderizarkits()
renderizarProdutos()
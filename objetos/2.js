let produtos = [
    { nome: "Teclado", preco: 100, estoque: 10 },
    { nome: "Mouse", preco: 50, estoque: 20 },
    { nome: "Monitor", preco: 800, estoque: 5 },
    { nome: "Fone", preco: 150, estoque: 8 }
];

for(let i = 0; i < produtos.length; i++){
    console.log(
        "Produto: " + produtos[i].nome +
        " | Preço: " + produtos[i].preco +
        " | Estoque: " + produtos[i].estoque
    );
}
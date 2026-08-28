let produtos = [
    { nome: "Teclado", preco: 100, estoque: 10 },
    { nome: "Mouse", preco: 50, estoque: 20 },
    { nome: "Monitor", preco: 800, estoque: 5 }
];

for(let i = 0; i < produtos.length; i++){
    produtos[i].desconto = 10;
}

console.log(produtos);
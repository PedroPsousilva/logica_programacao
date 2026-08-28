let produtos = [
    { nome: "Teclado", preco: 100, estoque: 10 },
    { nome: "Mouse", preco: 50, estoque: 20 },
    { nome: "Monitor", preco: 800, estoque: 5 },
    { nome: "Fone", preco: 150, estoque: 8 }
];

let maisCaro = produtos[0];

for(let i = 1; i < produtos.length; i++){
    if(produtos[i].preco > maisCaro.preco){
        maisCaro = produtos[i];
    }
}

console.log("Produto mais caro: " + maisCaro.nome);
console.log("Preço: R$ " + maisCaro.preco);
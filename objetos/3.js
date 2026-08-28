let produtos = [
    { nome: "Teclado", preco: 100, estoque: 10 },
    { nome: "Mouse", preco: 50, estoque: 20 },
    { nome: "Monitor", preco: 800, estoque: 5 },
    { nome: "Fone", preco: 150, estoque: 8 }
];

let total = 0;

for(let i = 0; i < produtos.length; i++){
    total = total + (produtos[i].preco * produtos[i].estoque);
}

console.log("Valor total do estoque: R$ " + total);
let produtos = [
    { nome: "Teclado", preco: 100, estoque: 10 },
    { nome: "Mouse", preco: 50, estoque: 3 },
    { nome: "Monitor", preco: 800, estoque: 2 },
    { nome: "Fone", preco: 150, estoque: 8 }
];

let quantidade = 0;

for(let i = 0; i < produtos.length; i++){
    if(produtos[i].estoque < 5){
        quantidade++;
    }
}

console.log(
    "Quantidade de produtos com estoque abaixo de 5: " + quantidade
);
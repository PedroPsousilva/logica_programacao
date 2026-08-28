const prompt = require("prompt-sync")();

let produtos = [
    { nome: "Teclado", preco: 100, estoque: 10 },
    { nome: "Mouse", preco: 50, estoque: 20 },
    { nome: "Monitor", preco: 800, estoque: 5 }
];

let nomeProduto = prompt("Digite o nome do produto: ");
let novoPreco = Number(prompt("Digite o novo preço: "));

let achou = false;

for(let i = 0; i < produtos.length; i++){
    if(produtos[i].nome == nomeProduto){
        produtos[i].preco = novoPreco;
        achou = true;
        break;
    }
}

if(achou){
    console.log("Preço alterado com sucesso!");
} else {
    console.log("Produto não encontrado");
}

console.log(produtos);
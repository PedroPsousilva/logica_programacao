const prompt = require("prompt-sync")()

let vetor = []
for(let i =0;i<6;i++){
    vetor[i] = Number(prompt("Informe um elemento do vetor"))
}
let tamanho = vetor.length
let posicao = Number (prompt("Informe posição do elemento para inserir"))
let valor = Number(prompt("Informe um valor para o elemento"))
for(let i = tamanho; i > posicao ;i--){
    vetor[i] = vetor[ i - 1]
}
vetor[posicao]= valor;
console.log("Novo vetor" + vetor)
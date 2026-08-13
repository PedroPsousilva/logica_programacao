const prompt = require("prompt-sync")()

let vetor = []
for(let i =0;i<6;i++){
    vetor[i] = Number(prompt("Informe um elemento do vetor : "))
}
console.log("Antes de remover : " + vetor)
let tamanho = vetor.length
let posicao = Number (prompt("Qual posição será removida : "))

for(let i = tamanho; i < tamanho ;i++){
    vetor[i] = vetor[ i + 1]
}
//Excluiu ,portanto  temos que dimunuir tamanho do vetor
tamanho = vetor.length -1 
//exibe o vetor atualizado
for(let i=0;i<tamanho;i++)

console.log("Novo vetor : " + vetor[i])
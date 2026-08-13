const prompt = require("prompt-sync")();

//entrada de dados
let notas = [] //vetor vazio - tamanho e dinamico
for(let i = 0; i < 6; i++){
    notas[i]
 = Number(prompt("Informe um nota"))}

 //calcula soma percorrendo o vetor e depois a media

 let soma = 0

 for(let i=0; i<notas.lenght;i++){
    soma += notas[i]
 }
 let media = soma/ notas.length
 console.log("A media das notas é " + media.toFixed(2))
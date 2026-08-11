const prompt = require("prompt-sync")()
//Informar os valores do vetor
let vet = []
for(let i=0;i<6;i++){
    vet[i] = Number(prompt("Informe um numero"))
}

//descobre o numero do vetor
let maior = vet[0]//assume que o primeiro elemento é o maior
let menor = vet[0]//assume que o primeiro elemento é o menor

for(let i = 1;i < vet.length;i++){
    if(vet[i] > maior){
        maior = vet[i]
    }
     if(vet[i] < menor){
        menor = vet[i]
    }
    
}

console.log("MAIOR =", + maior ,"Menor = " +menor)
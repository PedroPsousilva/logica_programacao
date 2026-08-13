//declaração do vetor

let notas = [6.5,8.5,7.0,9.2 ,6.8, 7.5]


// percorre o vetor para somar as notas

let soma = 0

for(let i =0 ;i < notas .length; i++){
    soma += notas [i] // soma = soma + somas[i]
}
console.log("A soma das notas é " + soma)
const prompt = require("prompt-sync")()
let matriz = [];
let cidades = [];

// Usuário digita o nome das cidades
for (let i = 0; i < 3; i++) {
    cidades[i] = prompt("Digite o nome da cidade " + (i + 1) + ":");
}

// Usuário digita as temperaturas
for (let i = 0; i < 3; i++) {
    matriz[i] = [];

    for (let j = 0; j < 5; j++) {
        matriz[i][j] = Number(prompt(
            "Digite a temperatura de " + cidades[i] + " no dia " + (j + 1) + ":"
        ));
    }
}

// Procurando a maior temperatura
let maior = matriz[0][0];
let cidade = 0;
let dia = 0;

for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 5; j++) {

        if (matriz[i][j] > maior) {
            maior = matriz[i][j];
            cidade = i;
            dia = j;
        }
    }
}

console.log("Maior temperatura: " + maior + "°C");
console.log("Cidade: " + cidades[cidade]);
console.log("Dia: " + (dia + 1));

// Exibindo a matriz
for (let i = 0; i < 3; i++) {
    let mat = cidades[i] + ": ";

    for (let j = 0; j < 5; j++) {
        mat += matriz[i][j] + " ";
    }

    console.log(mat);
}

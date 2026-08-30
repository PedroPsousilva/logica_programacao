const prompt = require("prompt-sync")()
let matriz = [];

let tamanho = Number(prompt("Digite o tamanho da matriz:"));

// Preenchendo a matriz
for (let i = 0; i < tamanho; i++) {
    matriz[i] = [];

    for (let j = 0; j < tamanho; j++) {
        matriz[i][j] = Number(prompt(
            "Digite o valor da posição [" + i + "][" + j + "]:"
        ));
    }
}


let identidade = true;

for (let i = 0; i < tamanho; i++) {

    for (let j = 0; j < tamanho; j++) {

        if (i == j && matriz[i][j] != 1) {
            identidade = false;
        }

        if (i != j && matriz[i][j] != 0) {
            identidade = false;
        }
    }
}

// Resultado
if (identidade == true) {
    console.log("A matriz é uma matriz identidade.");
} else {
    console.log("A matriz não é uma matriz identidade.");
}

for (let i = 0; i < tamanho; i++) {
    let mat = "";

    for (let j = 0; j < tamanho; j++) {
        mat += matriz[i][j] + " ";
    }

    console.log(mat);
}

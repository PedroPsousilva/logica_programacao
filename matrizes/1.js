let matriz = [];

for (let i = 0; i < 4; i++) {
    matriz[i] = [];

    for (let j = 0; j < 4; j++) {
        matriz[i][j] = 0;
    }
}

// Exibindo a matriz
for (let i = 0; i < 4; i++) {
    let mat = "";

    for (let j = 0; j < 4; j++) {
        mat += matriz[i][j] + " ";
    }

    console.log(mat);
}
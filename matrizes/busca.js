let mat = []

//Preencha a matriz

for (let i = 0;i< 4;i++){
    mat[i] =[]
    for(let j= 0;j< 3;j++){
        mat[i][j] = parseInt((Math.random() * 11))
    }
}

//busca
let linhaAlvo = -1
let procura = 10
let colunaAlvo = -1
busca : for(let i = 0 ;i<mat.length;i++){
            for(let j=0;j<mat[i].length;j++)
    if(mat[i][j] == procura){
        linhaAlvo = i
        colunaAlvo = j
        break  busca //sai dos 2 for
    }
}
console.log(mat)
if (linhaAlvo == -1 && colunaAlvo == -1){
    console.log("Numero nao encontrado")
}

else{
    console.log("Numero encontrado na linha "+ linhaAlvo+ " e na coluna "+colunaAlvo)
}
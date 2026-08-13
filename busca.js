const prompt = require("prompt-sync")();
let rendafixa = ["CDB", "LCA", "LCI", "FII","TESOURO"]
let usuario = prompt("Informe o tipo de renda fixa")

//procurar
let achou = false // nn achou ainda
for(let i=0; i < rendafixa.lenght;i++){
    if(usuario == rendafixa[i]){
        achou = true
        console.log("Encontrado na posição" + i)
        break // para de procurar
    }
}
//verifique se achou
if (!achou){
console.log("Tipo de renda fixa nao encontrada")
}
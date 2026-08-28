const prompt = require("prompt-sync")();

let alunos = [
    { nome: "Ana", idade: 20, nota: 8 },
    { nome: "Bruno", idade: 21, nota: 7 },
    { nome: "Carlos", idade: 19, nota: 9 }
];

let nomeAlvo = prompt("Digite o nome do aluno: ");

let achou = false;

for(let i = 0; i < alunos.length; i++){
    if(alunos[i].nome == nomeAlvo){
        console.log(alunos[i]);
        achou = true;
        break;
    }
}

if(!achou){
    console.log("Aluno não encontrado");
}
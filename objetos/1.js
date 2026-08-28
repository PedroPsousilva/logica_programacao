const prompt = require("prompt-sync")();

let livro = {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    ano: 1943
};

console.log(
    "Título: " + livro.titulo +
    " | Autor: " + livro.autor +
    " | Ano: " + livro.ano
);
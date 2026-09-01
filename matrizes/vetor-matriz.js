let produtos = [
 { nome: "Caderno", tipo: "Papelaria", descricao: "96 folhas" },
   { nome: "Caneta", tipo: "Papelaria", descricao: "ponta fina" },
    { nome: "Mochila", tipo: "Acessorio", descricao: "impermeavel" },
   ];
    
  let vendas = [
    [12, 18, 9, 15],
    [30, 25, 40, 35],
    [5, 8, 6, 10],
  ];

  let maior =vendas [0][0]
  let nomeMaior = produtos[0].nome
 for(let i = 0; i < produtos.length; i++){

    let total = 0;
    for(let j = 0 ; j < vendas[i].length;j++){
      total = total =vendas [i][j]
    }
    console.log(produtos[i].nome + ":", total, " unidades")
    if(total > maior){
      maior = total
      nomeMaior = produtos[i].nome
    }
  }
  console.log("A maior venda é  " + maior + " do produto : " + nomeMaior)
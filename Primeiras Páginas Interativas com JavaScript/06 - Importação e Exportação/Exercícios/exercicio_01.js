/*
    Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 à 100.
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.
    
    Dados de entrada:
    5
    50
    10
    98
    23
    
    Saída: 
    98
*/

const { gets, print } = require("../function_aux.js");

let maiorValorEncontrado = 0;

for (let i = 0; i < 5; i++) {
  const numerosSorteados = gets();
  if (numerosSorteados > maiorValorEncontrado) {
    maiorValorEncontrado = numerosSorteados;
  }
}

print(maiorNumero);

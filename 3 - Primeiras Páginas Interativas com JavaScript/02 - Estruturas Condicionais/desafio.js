/*
Faça um programa para calcular o valor de uma viagem.
Você terá cinco variáveis, sendo elas:
    1 - preço do etanol;
    2 - preço da gasolina;
    3 - o tipo de combustível que está no seu carro;
    4 - o gasto médio de combustível do carro por km;
    5 - distância em km da viagem.
*/

// Preços dos combustíveis:
const preçoEtanol = 4.5;
const preçoGasolina = 5.5;
let valorMédioGasto = 10;

//Distância da viagem percorrida:
let distanciaViagem = 100;

// Tipo de combustível que está no carro:
let isEtanol = true;

if (isEtanol) {
  const litrosConsumidos = distanciaViagem / valorMédioGasto;
  const valorGasto = litrosConsumidos * preçoEtanol;
} else if (!isEtanol) {
  const litrosConsumidos = distanciaViagem / valorMédioGasto;
  const valorGasto = litrosConsumidos * preçoGasolina;
} else {
  console.log("Tipo de combustível inválido");
}

console.log(`Valor gasto de combustível: R\$${valorGasto.toFixed(2)}`);
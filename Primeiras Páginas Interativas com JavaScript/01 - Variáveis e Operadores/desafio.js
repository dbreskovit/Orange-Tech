/*
Faça um programa para calcular o valor gasto de combustível em uma viagem.
Você terá três variáveis, sendo elas:
    - 1: preço do combustível;
    - 2: gasto médio do combustível do carro por km;
    - 3: distância em km da viagem.
*/

// Preço do combustível:
const preçoCombustível = 4.86;
//Gasto médio do carro:
let valorMédioGasto = 12;
//Distância da viagem percorrida:
let distanciaViagem = 180.4;

const litrosConsumidos = preçoCombustível / valorMédioGasto;
const valorGasto = litrosConsumidos * distanciaViagem;

console.log(`Valor gasto de combustível: R\$${valorGasto.toFixed(2)}`);

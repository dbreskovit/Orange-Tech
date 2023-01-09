/* 
    Crie uma classe para representar carros. 
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodados.
    Crie um método que dado à quantidade  de km e o preço do combustível nos dê o valor
    gasto em reais para realizar este percurso.
*/

class Carro {
  marca;
  cor;
  gastoMedioCombustivelPorKm;

  constructor(marca, cor, gastoMedioCombustivelPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioCombustivelPorKm = gastoMedioCombustivelPorKm;
  }
  
  calcularGastoCombustivel(km, precoCombustivel) {
    return km * this.gastoMedioCombustivelPorKm * precoCombustivel;
  }
}

const c1 = new Carro("Fiat", "Vermelho", 0.15);
console.log(c1.calcularGastoCombustivel(100, 4.5));

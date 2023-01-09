/*

    Crie uma classe para representar pessoas. Para cada pessoa teremos os atributos:
    nome, peso, altura. Aas pessoas devem ter a capacidade de dizer o valor do seu IMC
    instancie uma pessoa chamada José, que tenha 70kg de peso, 1.75 de altura 
    e peça ao José para dizer o valor do seu IMC.
    IMC em adultos:
        - abaixo de 18.5 (abaixo do peso);
        - entre 18.5 e 25 (peso normal);
        - entre 25 e 30 (acima do peso);
        - entre 30 e 40 (obeso);
        - acima de 40 (obesidade grave);
*/

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC() {
    return this.peso / this.altura ** 2;
  }

  dizerIMC() {
    const imc = this.calcularIMC();

    if (imc < 18.5) {
      console.log("Abaixo do peso");
    }

    if (imc >= 18.5 && imc < 25) {
      console.log("Peso normal");
    }

    if (imc >= 25 && imc < 30) {
      console.log("Acima do peso");
    }

    if (imc >= 30 && imc < 40) {
      console.log("Obeso");
    }

    if (imc >= 40) {
      console.log("Obesidade grave");
    }
  }
}

const Jose = new Pessoa("José", 70, 1.75);
Jose.dizerIMC();

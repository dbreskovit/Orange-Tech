/* 
        O IMC - Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação
        sobre a condição de peso de uma pessoa adulta.
        fórmula do IMC:

        IMC = peso / (altura * altura);

        Elabore um algoritmo que dado o peso e a altura de um adulto, mostre sua condição de acordo com a table abaixo:

        Tabela de valores do IMC em adultos:
            - abaixo de 18.5 (abaixo do peso);
            - entre 18.5 e 25 (peso normal);
            - entre 25 e 30 (acima do peso);
            - entre 30 e 40 (obeso);
            - acima de 40 (obesidade grave);
*/

// Peso e altura do usuário
const peso = 80;
const altura = 1.8;

// Cálculo do IMC
const imc = peso / Math.pow(altura, 2);

// Verificação da situação do usuário
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
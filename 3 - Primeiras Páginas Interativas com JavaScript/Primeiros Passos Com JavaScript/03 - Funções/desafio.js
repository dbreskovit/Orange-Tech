// Refatoração do código de IMC para usar funções:

function calcularIMC(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificarIMC(imc) {
  if (imc < 18.5) {
    return `o seu IMC é de: ${imc.toFixed(2)}. você está abaixo do peso. `;
  } else if (imc >= 18.5 && imc < 25) {
    return `o seu IMC é de: ${imc.toFixed(2)}. você está com o peso normal. `;
  } else if (imc >= 25 && imc < 30) {
    return `o seu IMC é de: ${imc.toFixed(2)}. você está acima do peso. `;
  } else if (imc >= 30 && imc <= 40) {
    return `o seu IMC é de: ${imc.toFixed(2)}. você está com obesidade. `;
  } else {
    return `o seu IMC é de: ${imc.toFixed(2)}. você está com obesidade grave. `;
  }
}

(function main() {
  const peso = 75;
  const altura = 1.75;

  const imc = calcularIMC(peso, altura);
  console.log(classificarIMC(imc));
})();

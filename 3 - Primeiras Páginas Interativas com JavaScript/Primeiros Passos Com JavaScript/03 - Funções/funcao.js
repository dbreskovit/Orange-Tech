// Função é um bloco de código que pode ser executado quando chamado.
// Funções são usadas para executar uma tarefa específica.
// Funções são executadas quando "algo as invoca" (chama).
function func_quadrado(n) {
  return n * n;
}

function func_media(n1, n2) {
  return (n1 + n2) / 2;
}

function func_calculaImc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc;
}

const quadrado = func_quadrado(10);
const media = func_media(10, 20);
const imc = func_calculaImc(80, 1.8);

console.log(quadrado);
console.log(media);
console.log(imc);

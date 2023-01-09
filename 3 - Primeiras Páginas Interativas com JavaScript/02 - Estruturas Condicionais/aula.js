let numero = 10;

// Variáveis booleans são variáveis que só podem ter dois valores: true ou false
// % é o operador de resto da divisão
// === é o operador de igualdade estrita
const ehNumeroPar = numero % 2 === 0;
// !== é o operador de desigualdade estrita
const ehNumeroImpar = numero % 2 !== 0;

// if é uma estrutura condicional que executa um bloco de código se a condição for verdadeira
if (ehNumeroPar) {
  console.log(`O número ` + numero + ` é par`);
}

if (ehNumeroImpar) {
  console.log(`O número ` + numero + ` é ímpar`);
}

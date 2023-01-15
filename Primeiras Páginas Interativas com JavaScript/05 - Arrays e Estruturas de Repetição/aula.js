// Arrays são estruturas de dados que permitem armazenar mais de um valor em uma única variável
const notas = [];

notas.push(7.7); // Adiciona um elemento no array
notas.push(8.9); // Adiciona um elemento no array
notas.push(9.5); // Adiciona um elemento no array

console.log(notas); // Imprime o array inteiro
console.log(notas[0]); // Imprime o primeiro elemento do array
console.log(notas[1]); // Imprime o segundo elemento do array
console.log(notas[2]); // Imprime o terceiro elemento do array

// Estruturas de repetição são estruturas que permitem executar um bloco de código várias vezes

const soma = 0;

for (let i = 0; i < notas.length; i++) {
  console.log(`Nota ${i} = ${notas[i]}`);
  soma += notas[i];
}

const média = soma / notas.length;
console.log(`Média = ${média}`);

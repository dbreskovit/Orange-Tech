/*
    1) Faça um algoritmo que dado as três notas tiradas por um aluno em um semestre da faculdade calcule a sua média e mostre as seguintes mensagens de acordo com cada situação:

    Médio = (nota1 + nota2 + nota3) / 3

    Classificação:
    - Se a média for maior ou igual a 7,0: Aprovado
    - Se a média for maior ou igual a 5,0 e menor que 7,0: Recuperação
    - Se a média for menor que 5,0: Reprovado
*/

// Notas do aluno
const nota1 = 7.5;
const nota2 = 6.5;
const nota3 = 9.5;

// Calculo da média
const media = (nota1 + nota2 + nota3) / 3;

// Verificação da situação do aluno
if (media >= 7) {
  console.log("Aprovado");
}

if (media >= 5 && media < 7) {
  console.log("Recuperação");
}

if (media < 5) {
  console.log("Reprovado");
}

console.log("Média: " + media.toFixed(2));

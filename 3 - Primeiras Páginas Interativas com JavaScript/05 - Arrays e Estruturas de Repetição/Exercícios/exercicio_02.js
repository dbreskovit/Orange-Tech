/*
    Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.
*/

const números = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < números.length; i++) {
  if (números[i] % 2 === 0) {
    console.log(números[i]);
  }
}

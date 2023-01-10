const entradas = [5, 50, 10, 98, 23];
let i = 0;

function gets() {
  return entradas[i++];
}

function gets_aux() {
  return "1";
}

function print(texto) {
  console.log(texto);
}

module.exports = { gets, print };

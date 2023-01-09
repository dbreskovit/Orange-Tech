function escrevaNome(name) {
  console.log("Meu nome é:", name);
}

escrevaNome("Diego");

function verificaIdade(idade) {
  if (idade >= 18) return true;
  return false;
}

if (verificaIdade(18)) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

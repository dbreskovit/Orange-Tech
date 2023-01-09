/*
    Elabore um algoritmo  que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual condição de pagamento escolhida e efetuar o cálculo adequado.
    
    Código condição de pagamento:
        1 - à vista no débito, recebe 10% de desconto;
        2 - à vista no dinheiro ou pix, recebe 15% de desconto;
        3 - em duas vezes, preço normal de etiqueta sem juros;
        4 - acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/

// Função para aplicar desconto
function aplicarDesconto(valor, desconto) {
  return valor - valor * desconto;
}

// função de seta é uma forma mais curta de escrever uma função
aplicarJuros = (valor, juros) => valor + valor * juros;

// Preço do produto
const Etiqueta = 100;
const formaDePagamento = 4;

// Verificação da forma de pagamento
if (formaDePagamento === 1) {
  console.log(
    `O valor final do produto é R$ ${aplicarDesconto(Etiqueta, 0.1)}`
  );
}

if (formaDePagamento === 2) {
  console.log(
    `O valor final do produto é R$ ${aplicarDesconto(Etiqueta, 0.15)}`
  );
}

if (formaDePagamento === 3) {
  console.log(`O valor final do produto é R$ ${Etiqueta}`);
}

if (formaDePagamento === 4) {
  console.log(`O valor final do produto é R$ ${aplicarJuros(Etiqueta, 0.1)}`);
}

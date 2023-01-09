/*
    Elabore um algoritmo  que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual condição de pagamento escolhida e efetuar o cálculo adequado.
    
    Código condição de pagamento:
        1 - à vista no débito, recebe 10% de desconto;
        2 - à vista no dinheiro ou pix, recebe 15% de desconto;
        3 - em duas vezes, preço normal de etiqueta sem juros;
        4 - acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/

// Preço do produto
const Etiqueta = 100;
const formaDePagamento = 1;

// Verificação da forma de pagamento
if (formaDePagamento === 1) {
  console.log(`O valor final do produto é R$ ${Etiqueta * 0.9}`);
}

if (formaDePagamento === 2) {
  console.log(`O valor final do produto é R$ ${Etiqueta * 0.85}`);
}

if (formaDePagamento === 3) {
  console.log(`O valor final do produto é R$ ${Etiqueta}`);
}

if (formaDePagamento === 4) {
  console.log(`O valor final do produto é R$ ${Etiqueta * 1.1}`);
}

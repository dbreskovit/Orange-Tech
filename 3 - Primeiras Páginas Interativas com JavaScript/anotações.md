# Primeiros Passos Com Javascript

## Variáveis e Operadores

### Aula:

```Javascript

// Variáveis são espaços na memória que armazenam valores
// Podemos criar variáveis com let ou const

let variable = 10; // let é uma variável que podemos mudar seu valor
const constant = 20; // const não é possível modificar pois se trata de uma constante

console.log(variable);

```

### Desafio:

```Javascript

/*
Faça um programa para calcular o valor gasto de combustível em uma viagem.
Você terá três variáveis, sendo elas:
    - 1: preço do combustível;
    - 2: gasto médio do combustível do carro por km;
    - 3: distância em km da viagem.
*/

// Preço do combustível:
const preçoCombustível = 4.86;
//Gasto médio do carro:
let valorMédioGasto = 12;
//Distância da viagem percorrida:
let distanciaViagem = 180.4;

const litrosConsumidos = preçoCombustível / valorMédioGasto;
const valorGasto = litrosConsumidos * distanciaViagem;

console.log(`Valor gasto de combustível: R\$${valorGasto.toFixed(2)}`);

```

## Estruturas Condicionais

### Aula:

```Javascript

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

```

### Desafio:

```Javascript

/*
Faça um programa para calcular o valor de uma viagem.
Você terá cinco variáveis, sendo elas:
    1 - preço do etanol;
    2 - preço da gasolina;
    3 - o tipo de combustível que está no seu carro;
    4 - o gasto médio de combustível do carro por km;
    5 - distância em km da viagem.
*/

// Preços dos combustíveis:
const preçoEtanol = 4.5;
const preçoGasolina = 5.5;
let valorMédioGasto = 10;

//Distância da viagem percorrida:
let distanciaViagem = 100;

// Tipo de combustível que está no carro:
let isEtanol = true;

if (isEtanol) {
  const litrosConsumidos = distanciaViagem / valorMédioGasto;
  const valorGasto = litrosConsumidos * preçoEtanol;
} else if (!isEtanol) {
  const litrosConsumidos = distanciaViagem / valorMédioGasto;
  const valorGasto = litrosConsumidos * preçoGasolina;
} else {
  console.log("Tipo de combustível inválido");
}

console.log(`Valor gasto de combustível: R\$${valorGasto.toFixed(2)}`);

```

## Praticando com Variáveis, Operadores e Estruturas Condicionais

### Exercício 01:

```Javascript

/*
    1) Faça um algoritmo que dado as três notas tiradas por um aluno em um semestre da faculdade calcule a sua média e mostre
    as seguintes mensagens de acordo com cada situação:

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

```

### Exercício 02:

```Javascript

/*
        O IMC - Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação
        sobre a condição de peso de uma pessoa adulta.
        fórmula do IMC:

        IMC = peso / (altura * altura);

        Elabore um algoritmo que dado o peso e a altura de um adulto, mostre sua condição de acordo com a table abaixo:

        Tabela de valores do IMC em adultos:
            - abaixo de 18.5 (abaixo do peso);
            - entre 18.5 e 25 (peso normal);
            - entre 25 e 30 (acima do peso);
            - entre 30 e 40 (obeso);
            - acima de 40 (obesidade grave);
*/

// Peso e altura do usuário
const peso = 80;
const altura = 1.8;

// Cálculo do IMC
const imc = peso / Math.pow(altura, 2);

// Verificação da situação do usuário
if (imc < 18.5) {
  console.log("Abaixo do peso");
}

if (imc >= 18.5 && imc < 25) {
  console.log("Peso normal");
}

if (imc >= 25 && imc < 30) {
  console.log("Acima do peso");
}

if (imc >= 30 && imc < 40) {
  console.log("Obeso");
}

if (imc >= 40) {
  console.log("Obesidade grave");
}

```

### Exercício 03:

```Javascript

/*
    Elabore um algoritmo  que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
    e a escolha da condição de pagamento.
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

```

# Conhecendo Funções JavaScript

## Funções

### Aula:

```Javascript

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

```

### Desafio:

```Javascript

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

```

## Praticando com Funções

### Exercício 01:

```Javascript

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


```

### Exercício 02:

```Javascript

/*
    Elabore um algoritmo  que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
    e a escolha da condição de pagamento.
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

```

# Criando Objetos e Classes em JavaScript

## Entendendo Objetos e Classes

### Aula:

```Javascript

// Objetos são estruturas que armazenam dados e comportamentos relacionados a um mesmo contexto.
// Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor.
// Um valor de propriedade pode ser uma função, que é então considerada um método do objeto.

/*

    // Objeto literal -> forma mais simples de criar um objeto

    const Diego = {
    // Atributos
    nome: "Diego",
    idade: 17,
    altura: 1.7,
    faculdade: null,

    // Métodos

    descrever: function () {
        console.log(
        `${this.nome} tem ${this.idade} anos e ${this.altura}m de altura.`
        );
    },
    };
*/

// Classes são estruturas que permitem criar objetos com atributos e métodos pré-definidos.
// A sintaxe de uma classe é muito parecida com a de uma função, mas ao invés de utilizar a palavra function, utilizamos a palavra class.
// Uma instancia de uma classe é chamada de objeto.

class Pessoa {
  //Atributos
  nome;
  idade;
  altura;
  faculdade;

  //Métodos
  descrever() {
    console.log(
      `${this.nome} tem ${this.idade} anos e ${this.altura}m de altura.`
    );
  }

  //Construtor
  constructor(nome, idade, altura, faculdade) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.faculdade = faculdade;
  }
}

const Diego = new Pessoa("Diego", 17, 1.7, null);

function compararPessoas(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho que ${p2.nome}.`);
  } else if (p1.idade < p2.idade) {
    console.log(`${p1.nome} é mais novo que ${p2.nome}.`);
  } else {
    console.log(`${p1.nome} e ${p2.nome} têm a mesma idade.`);
  }
}

```

## Praticando com Objetos e Classes

### Exercício 01:

```Javascript

/*
    Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodados.
    Crie um método que dado à quantidade  de km e o preço do combustível nos dê o valor
    gasto em reais para realizar este percurso.
*/

class Carro {
  marca;
  cor;
  gastoMedioCombustivelPorKm;

  constructor(marca, cor, gastoMedioCombustivelPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioCombustivelPorKm = gastoMedioCombustivelPorKm;
  }

  calcularGastoCombustivel(km, precoCombustivel) {
    return km * this.gastoMedioCombustivelPorKm * precoCombustivel;
  }
}

const c1 = new Carro("Fiat", "Vermelho", 0.15);
console.log(c1.calcularGastoCombustivel(100, 4.5));

```

### Exercício 02:

```Javascript

/*

    Crie uma classe para representar pessoas. Para cada pessoa teremos os atributos:
    nome, peso, altura. Aas pessoas devem ter a capacidade de dizer o valor do seu IMC
    instancie uma pessoa chamada José, que tenha 70kg de peso, 1.75 de altura
    e peça ao José para dizer o valor do seu IMC.
    IMC em adultos:
        - abaixo de 18.5 (abaixo do peso);
        - entre 18.5 e 25 (peso normal);
        - entre 25 e 30 (acima do peso);
        - entre 30 e 40 (obeso);
        - acima de 40 (obesidade grave);
*/

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC() {
    return this.peso / this.altura ** 2;
  }

  dizerIMC() {
    const imc = this.calcularIMC();

    if (imc < 18.5) {
      console.log("Abaixo do peso");
    }

    if (imc >= 18.5 && imc < 25) {
      console.log("Peso normal");
    }

    if (imc >= 25 && imc < 30) {
      console.log("Acima do peso");
    }

    if (imc >= 30 && imc < 40) {
      console.log("Obeso");
    }

    if (imc >= 40) {
      console.log("Obesidade grave");
    }
  }
}

const Jose = new Pessoa("José", 70, 1.75);
Jose.dizerIMC();

```

# Arrays e Estruturas de Repetição

## Arrays e Estruturas de Repetição

### Aula:

```Javascript

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

```

## Praticando Estruturas de Repetição

### Exercício 01:

```Javascript

/*
    Crie um programa que, dado um número, imprima sua tabuada.
*/

numero = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${i} x ${numero} = ${i * numero}`);
}


```

### Exercício 02:

```Javascript

/*
    Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.
*/

const números = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < números.length; i++) {
  if (números[i] % 2 === 0) {
    console.log(números[i]);
  }
}

```

# Importação e Exportação com JavaScript

## Desvendando as Funções "gets" e "print" dos Desafios de Código

### Aula:

##### aula.js

```Javascript

// Importando o módulo function_aux.js
// Destructuring é uma forma de desestruturar um objeto ou array em variáveis
const { gets, print } = require("./function_aux.js");

print(gets());


```

##### function_aux.js

```Javascript

const entradas = [5, 50, 10, 98, 23];
let  i = 0;

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

```

## Praticando os Conceitos de Importação e Exportação

### Exercício 01:

```Javascript

/*
    Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 à 100.
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    Saída:
    98
*/

const { gets, print } = require("../function_aux.js");

let maiorValorEncontrado = 0;

for (let i = 0; i < 5; i++) {
  const numerosSorteados = gets();
  if (numerosSorteados > maiorValorEncontrado) {
    maiorValorEncontrado = numerosSorteados;
  }
}

print(maiorNumero);

```
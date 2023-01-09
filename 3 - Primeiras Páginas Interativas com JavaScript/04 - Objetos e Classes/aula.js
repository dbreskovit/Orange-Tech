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

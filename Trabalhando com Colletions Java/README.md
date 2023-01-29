# Collections

É um objeto que agrupa múltiplos elementos
(variáveis primitivas ou objetos) dentro de uma única unidade.

Serve para armazenar e processar conjuntos de dados de forma eficiente.

Antes do Java 2 (JDK 1.2), a implementação de coleções na linguagem Java incluía poucas classes e não tinha a organização de um framework.

`Interfaces`: É um contrato que quando assumido por uma classe, este deve ser implementado.

`Implementações ou Classes`: são as materializações, a codificação das interfaces.

`Algoritmos`: É uma sequência lógica, finita e definida de instruções que devem ser seguidas para resolver um problema.

## Listas

É uma interface caracterizada pelo uso de elementos duplicados e garantia de ordem de inserção.

**Arraylist**: deve ser usado onde mais operações de pesquisas são necessárias.

LinkedList: deve ser usado onde mais operações de inserção e exclusão são necessárias

Ordenando coleções:

Comparable é uma interface e permite que uma determinada classe diga como uma instância dela deverá ser comparada com outras instâncias dela mesma.
Ex: Pessoa é comparada com outra pessoa de acordo com sua altura.

Comparator é uma função de comparação, que fornece uma ordenação para coleções de objetos que não possuem uma ordenação natural.

## Set

A interface Set não permite elementos duplicados e não possui índice.

HashSet: usa HashMap para armazenar elementos.
Não mantém a ordem dos elementos. Tem melhor performance que o LinkedHashSet e TreeSet.
Permite no máximo um elemento null.

LinkedHashSet: usa LinkedHashMap para armazenar elementos. Mantém a ordem de inserção dos elementos. A performance de LinkedHashSet está entre HashSet e TreeSet.Permite no máximo um elemento null.

TreeSet: usa TreeMap para armazenar elementos. Mantém ordem padrão natural de ordenação.
Menor performance que HashSet e LinkedHashSet.
Não permite nenhum elemento null. É usado em ordenação;

List e Set estendem a interface Collections, por isso possuem semelhanças.

## Map

É uma interface que mapeia valor (value) para chave (key).
Através da chave conseguimos acessar o valor configurado.
A chave não pode ser repetida, sendo sobrescrito pela última chamado caso isso ocorra.

HashMap - Ordem de inserção aleatória.
Permite chave nula.
Implementa interface Map
Não sincronizável, use Collections.synchronizedMap().

LinkedHashMap - Ordem de inserção de acordo com entrada.
Permite chave nula.
Implementa interface Map.
Não sincronizável, use Collections.synchronizedMap().

TreeMap - performance menor que HashMap e LinkedMap.
Ordem de inserção natural das chaves.
Não permite chave nula.
Implementa interface Map, SortedMap, NavigableMap
Não sincronizável, use Collections.synchronizedMap().

Precisamos sobrescrever os métodos `equals` e `hashcode` para armazenar e recuperar dados (modificar chave da tabela hash).

## Stream

- Classe Anônima: é uma classe não recebeu um nome e é tanto declarado e instanciado em uma única instrução.
  Usado ao criar uma classe que será instanciado apenas uma vez.

- Functional Interface: é uma interface funcional que possuem um método à ser implementados e pode ser tratada como expressões lambda.
  A anotação `@FunctionalInterface` existe para que o desenvolvedor possa forçar um erro de compilação, caso a interface não atenda os requisitos de uma Functional Interface.

  Interface Usadas:

  - Comparator
  - Consumer
  - Function
  - Predicate

- Lambda: é uma função sem declaração (sem nome, tipo de retorno e o modificador de acesso).
  Semelhante a simplificar uma classe, transformando-a em uma classe anônima.
  Uso: método declarado no mesmo lugar em que será usado.
  Sintaxe: (argumento) -> (corpo).

- Method Reference: é um novo recurso do Java 8 que permite fazer referência a um método ou construtor de uma classe (de forma funcional) e assim indicar que ele deve ser utilizado num ponto específico do código, deixando-o mais simples e legível.
  Uso: simplificar uma expressão lambda.
  Sintaxe: informar uma classe ou referência seguida do símbolo `::` e o nome do método sem os parênteses no final.

- Stream API: é uma opção para a manipulação de coleções em Java. Combinada com as expressões lambda, ela proporciona uma forma diferente de lidar com conjuntos de elementos, oferecendo ao desenvolvedor uma maneira simples e concisa de escrever código que resulta em facilidade de manutenção e paralelização sem efeitos indesejados em tempo de execução.
  SOURCE -> PIPELINE -> TERMINAL
  fonte dos objetos a serem manipulados(Collection) -> operações intermediárias -> operação terminais(finais)

Operações:

- intermediárias: retorna Stream, pode ser encadeada.
  Ex: map, limit, filter, sorted

- terminais: só pode usar um retorno, sendo objeto ou valor comum.
  Ex: forEach, match, count;

Operação `collect`: executa uma operação de redução mutável nos elementos deste Stream, permitindo a reutilização de estratégias de coleta e composição de operações de coleta, como agrupamento ou particionamento em vários níveis.

Operação `map`: converte cada elemento recebido em um outro objeto de acordo com a função passada.

Operação `ifPresent`: se um valor estiver presente, executa a ação dada com o valor, caso contrário, não faz nada.

Operação `removeIf`: remove todos os elementos desta coleção que atendem ao predicado fornecido.

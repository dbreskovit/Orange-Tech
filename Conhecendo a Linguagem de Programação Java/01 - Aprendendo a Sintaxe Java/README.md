# Anatomia das classes

> Uma classe bem estruturada, não quer guerra com ninguém!

**Sintaxe de declaração de uma nova classe:**

- 99,9% das nossas classes iniciarão com public class;
- Toda classe precisa de nome, exemplo MinhaClasse;
- O nome do arquivo deve ser idêntico ao nome da classe pública;
- Após o nome, definir o corpo { } , onde iremos compor nossas classes com atributos e métodos.

```Java
// arquivo CalculadoraCientifica.java

public class CalculadoraCientifica {

}
```

## Padrão de nomenclatura

Quando se trata de escrever códigos na linguagem Java, é recomendado seguir algumas convenções de escrita. Esses padrões estão expressos nos itens abaixo:

- **Arquivo .java:** Todo arquivo .java deve começar com letra MAIÚSCULA. Se a palavra for composta, a segunda palavra deve também ser maiúscula
- **Nome da classe no arquivo:** A classe deve possuir o mesmo nome do arquivo.java, exemplo:
- **Nome de variável:** toda variável deve ser escrita com letra minúscula, porém se a palavra for composta, a primeira letra da segunda palavra deverá ser MAIÚSCULA

```Java
String BR = "Brasil";
double PI = 3.14;
int ESTADOS_BRASILEIRO = 27;
int ANO_2000 = 2000;
```

## Declarando variáveis e métodos

- Declarar uma variável em Java segue sempre a seguinte estrutura:

```java
// Estrutura

Tipo NomeBemDefinido = Atribuicao (opcional em alguns casos)

// Exemplo

int idade = 23;
double altura = 1.62;
Dog spike; //observe que aqui a variável spike não tem valor, é normal
```

- Declarar métodos em Java segue uma estrutura bem simples:

```Java
// Estrutura

TipoRetorno NomeObjetivoNoInfinitivo Parametro(s)

//Exemplo

int somar (int numeroUm, int numero2)

String formatarCep (long cep)
```

## Indentação (indentation)

Termo utilizado para escrever o código do programa de forma hierárquica, facilitando assim a visualização e o entendimento do programa.

Código sem identação:

```java
// arquivo BoletimEstudantil.java

public class BoletimEstudantil {
public static void main(String[] args) {
int mediaFinal = 6;
if(mediaFinal<6)
System.out.println("REPROVADO");
else if(mediaFinal==6)
System.out.println("PROVA MINERVA");
else
System.out.println("APROVADO");
}
}
```

Código com Indentação:

```java
public class BoletimEstudantil {
	public static void main(String[] args) {
		int mediaFinal = 6;
		if (mediaFinal < 6)
			System.out.println("REPROVADO");
		else if (mediaFinal == 6)
			System.out.println("PROVA MINERVA");
		else
			System.out.println("APROVADO");
	}
}
```

## Organizando arquivos

À medida que nosso sistema vai evoluindo, surgem novos arquivos (código fonte) em nossa estrutura de arquivos do projeto. Isso exige que seja realizado uma organização destes arquivos através de pacotes (packages).

Com o uso de pacotes, as nossas classes (.java) passam a possuir duas identificações, o nome simples e nome qualificado:

- **Nome Simples**: Nome do arquivo, exemplo ContaBanco.
- **Nome Qualificado**: Nome do pacote + nome do arquivo, exemplo: com.suaempresa.ContaBanco.

## Java Beans

Umas das maiores dificuldades na programação é escrever algoritmos legíveis, a níveis que sejam compreendidos por todo seu time ou por você mesmo no futuro. Para isso, a linguagem Java sugere através de convenções, uma escrita universal, para nossas classes, atributos, métodos e pacotes.

**Variáveis**

- Uma variável deve ser clara, sem abreviações ou definição sem sentido;
- Uma variável é sempre no singular, **exceto quando se referir a um array ou coleção**.
- Defina um idioma único para suas variáveis. Se você for declarar variáveis em inglês, defina todas em inglês.

Não recomendado:

```java
double salMedio = 1500.23  //variável abreviada, o que dificulta a compreensão
String emails = "aluno@escola.com" //confuso se a variável seria um array ou único e-mail
String myName = "JOSEPH" //se idioma pt-BR, o valor poder ser de outro idioma mas o nome da variável não
```

Recomendado:

```java
double salarioMedio=1500.23;
String email ="aluno@escola.com";
String [] emails = {"aluno@escola.com","professor@escola.com"}
String meuNome = "JOSEPH"
```

**Métodos**

Exemplos sugeridos para nomenclatura de métodos:

```java
somar(int n1, int n2){}

abrirConexao(){}

concluirProcessamento() {}

findById(int id){} // não se assuste, você verá muito método em inglês em sua jornada

calcularImprimir(){} // há algo de errado neste método, ele deveria ter uma única finalidade
```

# Tipos e Variáveis

## Tipos de dados

Tabela de Tipos Primitivos e seus valores:

| Tipo  | Memória | Valor Mínimo               | Valor Máximo              |
| ----- | ------- | -------------------------- | ------------------------- |
| byte  | 1 byte  | -128                       | 127                       |
| short | 2 byte  | -32.768                    | 32.767                    |
| int   | 4 bytes | -2.147.483.648             | 2.147.483.647             |
| long  | 8 bytes | -9.223.372.036.854.775.808 | 9.223.372.036.854.775.807 |

Os tipos primitivos, que podem conter partes fracionárias podem ser representados por dois tipos:

| Tipo   | Memória | Valor Mínimo   | Valor Máximo  | Precisão      |
| ------ | ------- | -------------- | ------------- | ------------- |
| float  | 4 bytes | -3,4028E + 38  | 3,4028E + 38  | 6 – 7 dígitos |
| double | 8 bytes | -1,7976E + 308 | 1,7976E + 308 | 15 dígitos    |

## Declaração de Variáveis

`<Tipo> <nomeVariavel> <atribuicaoDeValorOpcional>`

Exemplos abaixo:

````Java
int idade; //Tipo "int", nome "idade", com nenhum valor atribuído.
int anoFabricacao = 2021; //tipo "int", nome "anoFabricacao", com valor 2021.
double salarioMinimo = 2.500; //tipo "double", nome "salarioMinimo", valor 2.500.```
````

Atenção: existe algumas peculiaridades a trabalhar com alguns tipos específicos. Observe no exemplo abaixo:

```Java
public class TipoDados {
	public static void main(String[] args) {
		byte idade = 123;
		short ano = 2021;
		int cep = 21070333; // se começar com zero, talvez tenha que ser outro tipo
		long cpf = 98765432109L; // se começar com zero, talvez tenha que ser outro tipo
		float pi = 3.14F;
		double salario = 1275.33;
	}
}
```

## Variáveis e Constantes

Uma variável é uma área de memória, associada a um nome, que pode armazenar valores de um determinado tipo. Um tipo de dado, define um conjunto de valores e um conjunto de operações.

Já as Constantes, são valores armazenados em memória que não podem ser modificados depois de declarados. Em Java, esses valores são representados pela palavra reservada final, seguida do tipo.

Por convenção, **Constantes** são sempre escritas em CAIXA ALTA.

# Operadores

> Símbolos especiais, que tem um significado próprio para a linguagem e estão associados a determinadas operações.

## Classificação do operadores

### Atribuição

Representado pelo símbolo de igualdade "=".

O operador de atribuição é utilizado para definir o valor inicial ou sobrescrever o valor de uma variável. em Java, definimos um tipo, nome e opcionalmente atribuímos um valor à variável através do operador de atribuição. Exemplos abaixo:

```java
//classe Operadores.java
String nome = "GLEYSON";
int idade = 22;
double peso = 68.5;
char sexo = 'M';
boolean doadorOrgao = false;
Date dataNascimento = new Date();
```

### Aritméticos

O operador aritmético, é utilizado para realizar operações matemáticas entre valores numéricos, podendo se tornar ou não uma expressão mais complexa.

Os operadores aritméticos são: + (adição), - (subtração), \* (multiplicação) e / (divisão).

```java
//classe Operadores.java
double soma = 10.5 + 15.7;
int subtração = 113 - 25;
int multiplicacao = 20 * 7;
int divisao = 15 / 3;
int modulo = 18 % 3;
double resultado = (10 * 7) + (20/4);
```

### Unários

Esses operadores, são aplicados juntamente com um outro operador aritmético. Eles realizam alguns trabalhos básicos como incrementar, decrementar, inverter valores numéricos e booleans.

- **(+) Operador unário de valor positivo** - números são positivos sem esse operador explicitamente;
- **(-) Operador unário de valor negativo** – nega um número ou expressão aritmética;
- **(++) Operador unário de incremento de valor** – incrementa o valor em 1 unidade;
- **(--) Operador unário de decremento de valor** – decrementa o valor em 1 unidade;
- **(!) Operador unário lógico de negação –** nega o valor de uma expressão boolean.

Exemplos abaixo:

```java
//classe Operadores.java
int numero = 5;

//Imprimindo o numero negativo
System.out.println(- numero);

//incrementando numero em mais 1 numero, imprime 6
numero ++;
System.out.println(numero);

//incrementando numero em mais 1 numero, imprime 7
System.out.println(numero ++);// ops algo de errado não está certo

System.out.println(numero);// agora sim, numero virou 7

//ordem de precedência conta aqui
System.out.println(++ numero);

boolean verdadeiro = true;

System.out.println("Inverteu " + !verdadeiro);
```

### Ternário

O operador de condição ternária é uma forma resumida para definir uma condição e escolher por um dentre dois valores. Você deve pensar numa condição ternária, como se fosse uma condição IF normal, porém, de uma forma em que toda a sua estrutura estará escrita numa única linha.

O operador ternário é representado pelos símbolos "?" e ":" utilizados na seguinte estrutura de sintaxe:

` <Expressão Condicional>`` ?``<Caso condição seja true>``: ``<Caso condição seja false> `

Exemplos abaixo:

```java
// classe Operadores.java
int a, b;

a = 5;
b = 6;

/* EXEMPLO DE CONDICIONAL UTILIZANDO UMA ESTRUTURA IF/ELSE
if(a==b)
   resultado = "verdadeiro";
else
   resultado = "falso";
*/

//MESMA CONDICIONAL, MAS DESSA VEZ, UTILIZANDO O OPERADOR CONDICIONAL TERNÁRIO
String resultado = (a==b) ? "verdadeiro" : "false";

System.out.println(valor);
```

### Relacionais

Os operadores relacionais, avaliam a relação entre duas variáveis ou expressões. Neste caso, mais precisamente, definem se o operando à esquerda é igual, diferente, menor, menor ou igual, maior, maior ou igual ao da direita, retornando um valor booleans como resultado.

- == Quando desejamos verificar se uma variável é IGUAL A outra.
- != Quando desejamos verificar se uma variável é DIFERENTE da outra.
- \> Quando desejamos verificar se uma variável é MAIOR QUE a outra.
- \>= Quando desejamos verificar se uma variável é MAIOR OU IGUAL a outra.
- < Quando desejamos verificar se uma variável é MENOR QUE outra.
- <= Quando desejamos verificar se uma variável é MENOR OU IGUAL a outra.

```Java
//classe Operadores.java
int numero1 = 1;
int numero2 = 2;

if(numero1 > numero2)
	System.out.print("Numero 1 maior que numero 2");

if(numero1 < numero2)
	System.out.print("Numero 1 menor que numero 2");

if(numero1 >= numero2)
	System.out.print("Numero 1 maior ou igual que numero 2");

if(numero1 <= numero2)
	System.out.print("Numero 1 menor ou igual que numero 2");

if(numero1 != numero2)
	System.out.print("Numero 1 é diferente de numero 2");
```

### Lógicos

Os operadores lógicos, representam o recurso que nos permite criar expressões lógicas maiores, a partir da junção de duas ou mais expressões.

- && Operador Lógico "E"
- || Operador Lógico "OU"

```java
// Operadores.java
boolean condicao1=true;

boolean condicao2=false;

/* Aqui estamos utilizando o operador lógico E para fazer a união de duas
expressões.
É como se estivesse escrito:
 "Se Condicao1 e Condicao2 forem verdadeiras, executar código"
*/

if(condicao1 && condicao2)
	System.out.print("Os dois valores precisam ser verdadeiros");;

//Se condicao1 OU condicao2 for verdadeira, executar código.
if(condicao1 || condicao2)
	System.out.print("Um dos valores precisa ser verdadeiro");
```

# Métodos

> Todas as ações das aplicações são consideradas métodos.

## Critério de nomeação de Métodos

- Deve ser nomeado como verbo;
- Seguir o padrão camelCase.

Exemplos sugeridos para nomenclatura de métodos:

```java
somar(int n1, int n2){}

abrirConexao(){}

concluirProcessamento() {}

findById(int id){}

calcularImprimir(){}
```

## Critério de definição de métodos

1. **Qual a proposta principal do método?**
2. **Qual o tipo de retorno esperado após executar o método?**
3. **Quais os parâmetros serão necessários para execução do método?**
4. **O método possui o risco de apresentar alguma exceção?**
5. **Qual a visibilidade do método?**

```Java
public class MyClass {

	public double somar(int num1, int num2){
		//LOGICA - FINALIDADE DO MÉTODO
		return ... ;
	}

	public void imprimir(String texto){
		//LOGICA - FINALIDADE DO MÉTODO
		//AQUI NÃO PRECISA DO RETURN
		//POIS NÃO SERÁ RETORNADO NENHUM RESULTADO
	}
	// throws Exception : indica que o método ao ser utilizado
	// poderá gerar uma exceção
	public double dividir(int dividendo, int divisor) throws Exception{}

	// este método não pode ser visto por outras classes no projeto
	private void metodoPrivado(){}

	//alguns equívocos estruturais
	public void validar(){
		//este método deveria retornar algum valor
		//no caso boolean (true ou false)
	}
	public void calcularEnviar(){
		//um método deve representar uma única responsabilidade
	}
	public void gravarCliente(String nome, String cpf, Integer telefone, ....){
		//este método tem a finalidade de gravar
		//informações de um cliente, por que não criar
		//um objeto cliente e passar como parâmetro ?
		//veja abaixo
	}
	public void gravarCliente(Cliente cliente){}
	//ou
	public void gravar(Cliente cliente){}
}

```

## Exercitando

Vamos criar um exemplo de uma classe para representar uma SmartTV onde:

1. Ela tenha as características: ligada (boolean), canal (int) e volume (int);
2. Nossa TV poderá ligar e desligar e assim mudar o estado ligada;
3. Nossa TV aumentará e diminuirá o volume sempre em +1 ou -1;
4. Nossa TV poderá mudar de canal de 1 em 1 ou definindo o número correspondente.

# Escopo

O escopo pode ser entendido como,o ambiente onde uma variável pode ser acessada. Em Java, o escopo de variáveis vai de acordo com o bloco onde ela foi declarada.

```java
public class Conta {
	//variavel da classe conta
	double saldo=10.0;

	public void sacar(Double valor) {
		//variavel local de método
		double novoSaldo = saldo - valor;
	}
	public void imprimirSaldo(){
		//disponível em toda classe
		System.out.println(saldo);
		//somente o método sacar conhece esta variavel
		System.out.println(novoSaldo);

	}
	public double calcularDividaExponencial(){
		//variável local de método
		double valorParcela = 50.0;
		double valorMontante = 0.0; // começando a variável com valor zero
		for(int x=1; x<=5; x++) {//x variável de escopo de fluxo
			//esta variável será reiniciada a cada execução for
			double valorCalculado = valorParcela * x;
			valorMontante = valorMontante + valorCalculado;
		}
		//escopo de fluxo
		//x e valorCalculado nunca estarão disponíveis fora do for

		return valorMontante;
	}
}
```

# Palavras reservadas

### Controle de pacotes

- **import:** importa pacotes ou classes para dentro do código;
- **package:** especifica a que pacote, todas as classes de um arquivo pertencem.

### Modificadores de acesso

- **public:** acesso de qualquer classe;
- **private:** acesso apenas dentro da classe;
- **protected:** acesso por classes no mesmo pacote e subclasses.

### Primitivos

- **boolean:** um valor indicando verdadeiro ou falso;
- **byte:** um inteiro de 8 bits (signed);
- **char:** um character unicode (16-bit unsigned);
- **double:** um número de ponto flutuante de 64 bits (signed);
- **float:** um número de ponto flutuante de 32 bits (signed);
- **int:** um inteiro de 32 bits (signed);
- **long:** um inteiro de 64 bits (signed);
- **short:** um inteiro de 32 bits (signed);
- **void:** indica que o método não tem retorno de valor.

### Modificadores de classes, variáveis ou métodos

- **abstract:** classe que não pode ser instanciada ou método que precisa ser implementado, por uma subclasse não abstrata;
- **class:** especifica uma classe;
- **extends:** indica a superclasse que a subclasse está estendendo;
- **final:** impossibilita que uma classe seja estendida, que um método seja sobrescrito ou que uma variável seja reinicializada;
- **implements:** indica as interfaces que uma classe irá implementar;
- **interface:** especifica uma interface;
- **native:** indica que um método está escrito em uma linguagem dependente de plataforma, como o C;
- **new:** instancia um novo objeto, chamando seu construtor;
- **static:** faz um método ou variável pertencer à classe ao invés de às instâncias;
- **strictfp:** usado em frente a um método ou classe para indicar que os números de ponto flutuante seguirão as regras de ponto flutuante, em todas as expressões;
- **synchronized:** indica que um método só pode ser acessado por uma thread de cada vez transient: impede a serialização de campos;
- **volatile:** indica que uma variável pode ser alterada durante o uso de threads.

### Controle de fluxo dentro de um bloco de código

- **break:** sai do bloco de código em que ele está;
- **case:** executa um bloco de código dependendo do teste do switch;
- **continue:** pula a execução do código que viria, após essa linha e vai para a próxima passagem do loop;
- **default:** executa esse bloco de código caso nenhum dos teste de switch-case seja verdadeiro;
- **do:** executa um bloco de código uma vez, e então realiza um teste em conjunto com o while para determinar se o bloco deverá ser executado novamente;
- **else:** executa um bloco de código alternativo caso o teste "if" seja falso;
- **for:** usado para realizar um loop condicional de um bloco de código;
- **if:** usado para realizar um teste lógico de verdadeiro ou falso;
- **instanceof:** determina se um objeto é uma instância de determinada classe, superclasse ou interface;
- **return:** retorna um método sem executar qualquer código, que venha depois desta linha (também pode retornar uma variável);
- **switch:** indica a variável a ser comparada nas expressões case;
- **while:** executa um bloco de código repetidamente enquanto a condição for verdadeira.

### Tratamento de Erros

- **assert:** testa uma expressão condicional, para verificar uma suposição do programador;
- **catch:** declara o bloco de código usado para tratar uma exceção;
- **finally:** bloco de código, após um try-catch, que é executado independentemente do fluxo de programa seguido ao lidar com uma exceção;
- **throw:** usado para passar uma exceção para o método que o chamou;
- **throws:** indica que um método pode passar uma exceção para o método que o chamou;
- **try:** bloco de código que tentará ser executado, mas que pode causar uma exceção.

### Variáveis de referência

- **super:** refere-se a superclasse imediata;
- **this:** refere-se a instância atual do objeto.

### Palavras reservadas não utilizadas

- **const:** Não utilize para declarar constantes;
- **goto**: não implementada na linguagem Java, por ser considerada prejudicial.

# Documentação

## Tags

| Tag      | Descrição                                              |
| -------- | ------------------------------------------------------ |
| @autor   | Autor / Criador                                        |
| @version | Versão do recurso disponibilizado                      |
| @since   | Versão / Data de início da disponibilização do recurso |
| @param   | Descrição dos parâmetros dos métodos criados           |
| @return  | Definição do tipo de retorno de um método              |
| @throws  | Se o método lança alguma exceção                       |

```Java
/**
* <h1>Calculadora</h1>
* A Calculadora realiza operações matemáticas entre números inteiros
* <p>
* <b>Note:</b> Leia atentamente a documentação desta classes
* para desfrutar dos recursos oferecidos pelo autor
*
* @author  Diego Breskovit
* @version 1.0
* @since   06/01/2023
*/
public class Calculadora {
    /**
   * Este método é utilizado para somar dois números inteiros
   * @param numeroUm este é o primeiro parâmetro do método
   * @param numeroDois este é o segundo parâmetro do método
   * @return int o resultado deste método é a soma dos dois números.
   */
    public int somar(int numeroUm, int numeroDois) {
        return  numeroUm + numeroDois;
    }
}
```

## Tipos de comentários

```Java

// Olá, eu sou um comentário em uma única linha

```

```Java

/* Olá,
 * Eu sou um comentario
 * que posso ser mais detalhadod
 * quando necessário
 */

```

```Java

/**
 * Estas duas estrelinhas acima
 * é para identificar que você
 * pretende elaborar um comentário
 * a nível de documentação.
 * Que incrível !!!
 */

```

# Scanner

A classe Scanner, permite que o usuário tenha, uma interação mais assertiva com o nosso programa, veja como vamos mudar o nosso programa AboutMe para deixar mais intuitivo aos usuários:

```java
import java.util.Locale;
import java.util.Scanner;

public class AboutMe {
    public static void main(String[] args) {
        //criando o objeto scanner
        Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

        System.out.println("Digite seu nome");
        String nome = scanner.next();

        System.out.println("Digite seu sobrenome");
        String sobrenome = scanner.next();

        System.out.println("Digite sua idade");
        int idade = scanner.nextInt();

        System.out.println("Digite sua altura");
        double altura = scanner.nextDouble();


        //imprimindo os dados obtidos pelo usuario
        System.out.println("Ola, me chamo " + nome + " " + sobrenome);
        System.out.println("Tenho " + idade + " anos ");
        System.out.println("Minha altura é " + altura + "cm ");


    }
}
```

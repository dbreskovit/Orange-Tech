# Spring Framework

## O que é?

O _Spring Framework_ é uma ferramenta open-source baseada em padrões de projetos, inversão de controles e injeção de dependências. 

## Inversão de Controle (IoC)

Trata-se o redirecionamento de fluxo de execução de um código retirado parcialmente o controle sobre ele e delegando-o para um container. Com o propósito de minimizar o acoplamento do código.

## Injeção de Dependências

É um padrão de desenvolvimento com a finalidade de manter baixo o nível de acoplamento entre módulos de uma aplicação.

## Beans

Objeto que é instanciado, montado e gerenciado por um container através do principio da inversão de controle.


## Scopes

### Singleton

O container do Spring IoC define apenas uma instância do objeto.

### Prototype

Será criado um novo objeto a cada solicitação ao container.

### HTTP - Request

Um bean será criado para cada requisição HTTP.

### HTTP - Session

Um bean será criado para sessão de usuário.

### HTTP - Global

Cria um bean para o ciclo de vida do contexto da aplicação.

## Autowired

Uma anotação (indicação) onde deverá ocorrer uma injeção automática de dependência.


# Spring Boot

## Starters

Listagem de alguns starters mais utilizados:

**Spring-boot-starter-\***

- *data-jpa:* Integração ao banco de dados via JPA - Hibernate.
- *data-mongodb:* Interação com banco de dados MongoDB.
- *web:* Inclusão do container Tomcat para aplicação REST.
- *web-services:* Web-services baseados na arquitetura SOAP.
- *batch:* Implementação de JOBs de processos.
- *test:* Disponibilização de recursos para testes unitários com JUnit
- *openfeign:* Client HTTP baseado em interfaces.
- *actuator:* Gerenciamento de monitoramento da aplicação.


# Conceito de ORM e JPA

## O que é ORM (Object-Relational Mapping)?

Recurso que aproxima o paradigma de orientação à objetos ao contexto banco de dados relacional.
Seu uso é realizado através do mapeamento de objeto para uma tabela por uma biblioteca ou framework.


## O que é JPA (Java Persistence API)?

JPA é uma especificação baseada em interfaces, que através de um framework realiza operações de persistência de objetos em Java.


## Mapeamento

- Identificação
- Definição
- Relacionamento
- Herança
- Persistência

### Mapeamento na prática

> *Exemplo retirado do repositório: [dbreskovit/Unisoma](github.com/dbreskovit/Unisoma)*

```Java

@Entity
@Table(name = "TB_EMPLOYEES")
public class EmployeeModel implements Serializable {

    private static final Long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private String cpf;

    @Column(nullable = false)
    private String dataNasc;

    @Column(nullable = false)
    private String telefone;

    @Column(nullable = false)
    private AddressModel endereco;

    @Column(nullable = false)
    private double salario;

```

# Spring Web

## O que é API (interface application program)?
Código de comunicação entre aplicações aplicações distintas.

## REST (representational state transfer) 
A API REST é como um guia de boas práticas e RESTful é aplicar os princípios de REST.

## Princípios

- Cliente-servidor 
- Interface uniforme 
- Stateless
- Cache
- Camadas

## Nível de Maturidade

- Nível 0: Ausência de Regras

<img width="100%" src="https://3025166959-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-MgwMOcm4UygF4VcCNIq%2F-Mk6Um1cv6DLX1lulA72%2F-Mk6WcNqQPQz5aCDAMUS%2Fn0.png?alt=media&token=e0d39b41-335f-419e-b34a-de8168e65219">

- Nível 1: Aplicação de Resources

<img width="100%" src="https://3025166959-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-MgwMOcm4UygF4VcCNIq%2F-Mk6Um1cv6DLX1lulA72%2F-Mk6XY5IFcU7tKRR6uSc%2Fn1.png?alt=media&token=d40e2963-c47b-463f-9db9-18fd7be81607">

- Nível 2: Implementação de verbos HTTP

<img width="100%" src="https://3025166959-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-MgwMOcm4UygF4VcCNIq%2F-Mk6Y2s9mr1bxNFWbg1x%2F-Mk6YRvN7Hr7fc4FPpnn%2Fn2.png?alt=media&token=7d65bf7a-b417-443b-88f8-36ebd351cbb1">

- Nível 3: HATEOAS

<img width="100%" src="https://3025166959-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-MgwMOcm4UygF4VcCNIq%2F-Mk6Yqi5-txP_8KXI_6V%2F-Mk6ZbNHkJEjfcfi2Ada%2Fn3.png?alt=media&token=4ffffc64-6da4-4bdf-b873-067912c31a88">

> *Mais informações em: [Richardson Maturity Model](https://martinfowler.com/articles/richardsonMaturityModel.html)*

# Primeiro Controller

## Rest Controller

Anotações e configurações mais comuns:

- **@RestController:** Responsável por designar o bean de compoment, que surporta requisições HTTP com base na arquitetura REST.
- **@RequestMapping:** Determina qual a URI comum para todos os recursos disponibilizados pelo Controller.
- **@GetMapping:** Determina que o método aceitará requisições HTTP do tipo GET.
- **@PostMapping:** Determina que o método aceitará requisições HTTP do tipo POST.
- **@PutMapping:** Determina que o método aceitará requisições HTTP do tipo PUT.
- **@DeleteMapping:** Determina que o método aceitará requisições HTTP do tipo DELETE.
- **@RequestBody:** Converte um JSON para o tipo do objeto esperado como parâmetro no método.
- **@PathVariable:** Consegue determinar que parte da URI será composta por parâmetros recebidos nas requisições. 
# Swagger

> Swagger é uma linguagem de descrição de interface, para descrever APIs RESTful expressas usando JSON. O Swagger é usado junto com um conjunto de ferramentas de software de código aberto para projetar, construir, documentar e usar serviços da Web RESTful.

# Exception Handlers

Exception handlers são blocos de código que são executados quando uma exceção (um erro em tempo de execução) é lançada em um programa. Esses manipuladores são usados para manipular e recuperar exceções, evitar que o programa falhe e fornecer feedback significativo ao usuário. O tratamento de exceções fornece uma maneira estruturada de lidar com erros e condições inesperadas no código, facilitando a depuração e a manutenção do programa.
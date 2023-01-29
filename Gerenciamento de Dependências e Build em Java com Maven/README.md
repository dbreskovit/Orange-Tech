# Introdução, definição e instalação

## O que é Maven ?
- Endereça como o software foi construído e suas dependências através do POM(Project Object Model)
- Facilita a compreensão do desenvolvedor
- Fornecer informações de qualidade

# Primeiro projeto e conceitos

## Comandos

1. Compilar: `mvn copile`
2. Testar: `mvn test`
3. Empacotar: `mvn package`
4. Limpar diretório de trabalho: `mvn clean`

# POM, dependências e repositórios

## Entendendo o POM

- POM – Project Object Model
- Unidade fundamental de trabalho
- Formato XML
- Detalha o projeto
- Detalha como construir o projeto
- Maven sempre procura pelo pom.xml para realizar sua execução

## Mais detalhes pom.xml

- Nome do projeto
- Dependências
- Módulos
- Configurações de build
- Detalhes do projeto (nome, descrição, licença, url)
- Configurações de ambiente (repositórios, tracking, profiles)


## O que são repositórios?

- São locais onde podemos encontrar plugins e bibliotecas que o Maven provê
- Dois tipos: Local e Remoto

### Repositório remoto

- É o local central utilizado pelo Maven para buscar os artefatos.
- Configurado automaticamente pelo Super POM para utilizar o Maven Central

### Repositório local

- É o repositório na máquina utilizado pelo Maven para buscar os artefatos.
- Estratégia de caching
- Localizações	
- Windows: `%USERPROFILE%\.m2\repository`
- Linux: `$HOME/.m2/repository`

## Como adicionar dependências

- **groupId**: É como se fosse o id da organização. Segue as regras de nomes de pacote Java
- **artifactId**: Nome do projeto em si
- **Version**: Número da versão que será utilizada

# Gerenciando dependências

## Tipos de Dependências

- Direta: dependências declaradas no pom.xml
- Transitiva: dependências obrigatórias das dependências declaradas no pom.xml

## Escopos

Para lidar com esse problema, o Maven provê escopos para limitar a transitividade das dependências. Existem 6 tipos de escopos que podemos utilizar.

### Classpath

- Runtime
- Test
- Compile

### Escopo compile

- Escopo default
- Disponível em todos os classpaths
- É transitivo


### Escopo provided
- Indica que a dependência será fornecida em tempo de execução por uma implementação na JDK ou via container
- Exemplos: Servlet API, Java EE APIs
- A dependência com esse escopo é adicionado no classpath usado para compilação(compile) e teste(test) mas não em runtime;
- Não é transitiva

### Escopo runtime

- Indica que a dependência é necessária para execução e não para compilação
- Maven inclui no classpath dos escopos de runtime e test


### Escopo test

- Disponível somente para compilação e execução de testes
- Não é transitivo

### Escopo system

- Similar ao escopo provided exceto por ser necessário prover o JAR explicitamente
- A dependência com esse escopo é adicionado no classpath usado para compilação(compile) e teste(test) mas não em runtime;
- Não é transitiva


### Escopo import

- Este escopo é disponível apenas com uma dependência do tipo pom e com tag <dependencyManagement>
- Indica um processo de reutilizar dependências de um projeto

# Maven Build Lifecycle

## O que é

- Conceito de ciclo de vida de construção
- Conceito e os comandos da ferramenta
- Composto por 3 ciclos de vida
- Cada ciclo possui fases (Maven Phases)
- Cada fase possui objetivos (Maven Goals)

## Default Lifecycle

- Principal ciclo
- Responsável pelo deploy local
- Composto por 23 fases

## Principais fases

- validate
- compile
- test-compile
- test
- integration-test
- package
- install
- deploy

## Clean Lifecycle

- Ciclo intermediário
- Responsável pela limpeza do projeto
- Composto por 3 fases

#### Fases

- pre-clean
- clean
- post-clean

## Site Lifecycle

- Ciclo final
- Responsável pela criação do site de documentação do projeto
- Composto por 4 fases

#### Fases

- pre-site
- site
- post-site
-  site-deploy

# Projetos multi-módulos

# Plugins

Projetos multi-módulos


## O que são os plugins?

- A maioria das funcionalidades são providas por plugins
- Estilo arquitetural para extensibilidade (criar seu próprio plugin)
- Escrito prioritariamente em Java e disponibilizados comumente como JARs

## Plugins mais utilizados

- Eclipse
- Jacoco
- Ear
- War
- Compile
- Clean
- Checkstyle
- Javadoc
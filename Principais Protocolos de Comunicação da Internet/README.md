# Aula 01: Como funciona o protocolo HTTP?

### Mensagens HTTP

- Tipos: request & response

### XML e JSON

**Comum**

- Auto-descritivos
- Hierárquicos
- Independentes de linguagem de prog.
- Vasta utilização

**Diferenças**

- Tags
- Legibilidade
- Sucinto
- Utilização de arrays


## Mensagens HTTP – Request & Response

### Mensagens HTTP: Request

```

Get: /somedir/page.html HTTP/1.1
Host: www.someschool.edu
Connection: close
User-agent: Mozilla/5.0
Accept-language: fr

```


- **GET:** solicita um recurso do servidor
- **HEAD:** GET sem corpo de resposta
- **POST:** submete uma entidade a - um recurso
- **PUT:** substituição de recursos pelos dados da requisição
- **DELETE:** remoção de um recurso
- **TRACE:** chamada de loop-back a um determinado recurso
- **OPTION:** opções de comunicação com recurso
- **CONNECT:** tunelamento identificado pelo recurso
- **PATCH:** modificação parcial

### Mensagens HTTP: Response

```

HTTP/1.1 200 OK
Connection: close
Date: Tue, 09 Aug 2011 15:44:04 GMT
Server: Apache/2.2.3 (CentOS)
Last-Modified: Tue, 09 Aug 2011 15:11:03 GMT
Content-Length: 6821
Content-Type: text/html
(data , data, ....)

```

### Classificação dos Status Code

- Information response (100 – 199)
- Successful response (200 – 299)
- Redirection response (300 – 399)
- Client error response (400 – 499)
- Server error response (500 – 599)


## Para que serve Cookie e Cache?

### O que são Cookies?

Pequenos pedaços ou blocos de dados criados e utilizados pelo servidor para persistir dados no dispositivo do cliente.

## HTTP 2.0 - Atualizações do protocolo

O HTTP/2 implementa um formato de entrega mais eficiente, acelerando o carregamento das páginas e elementos de uma aplicação web. Este é a principal vantagem que temos na utilização do HTTP/2.

- Única conexão persistente
- Compressão de header
- Server push
- HTTPS por padrão - TLS
- Negociação no handshake

# Aula 02: HTTPS – O que muda no protocolo?

## Conceitos básicos de segurança da informação

### Criptografia por chave

- Assimétrica (Chave privada e Chave pública)
- Simétrica (Chave única privada)

#### Certificado Digital

- IPSec
- SSL
- TSL

## Protocolo SSL – Secure Socket Layer

- Segurança para conexões TCP
- Confidencialidade
- Integridade
- Autenticidade end-point

## HTTPS e LGPD

### LGPD

LGPD – Lei Geral de Proteção de Dados

- Promulgada em 2018
- Entrou em vigor em Agosto de 2020
- N° 13.709/2018
  
- GDPR – General Data Protection Regulation
- Legislação do estado da Califórnia - EUA

#### O que a lei protege?

- Dados de identificação dos usuários
- Dados sensíveis Religião, etnia.

## Protocolo de comunicação WebSocket

### Web app

1. Conexões subjacentes
2. Alto overhead
3. Mapeamento vis script


#### Como funciona o Websocket?

Definição

>O protocolo fornece comunicação cliente/servidor executando um código não confiável em um ambiente controlado para o host que escolheu essa comunicação.

#### Filosofia do WebSocket

1. Origin-base security model
2. Endereçamento e protocolo
3. Camadas -> enquadramento on top TCP
4. Encerramento do handshake

## Como funciona a comunicação na internet?

- Proxy
- HTTP server

- DNS – Domain Name System
- Socket
- Load balancer
# 🤵 API REST

As Aplicações Clientes solicitação a autenticação de login para
o Microservice de autenticação que retorna um Token JWT de Autenticação.

Neste projeto Temos alguns **Endpoints Base** que podem ser extendidos da forma mais adequada para seu contexto.

São eles:

``` Markdown
### Usuários 🧑

- GET /users
- GET /users/:uuid
- POST /users
- PUT /users/:uuid
- DELETE /users/:uuid

### Autenticação 🤖

- POST /token
- POST /token/validate
```
# PGATS-02 API

API REST para login, registro, consulta de usuários e transferências.

## Instalação

```bash
npm install
```

## Execução

```bash
npm start
```

A API estará disponível em http://localhost:3000

## Endpoints

- `POST /register` — Registro de usuário
- `POST /login` — Login de usuário
- `GET /users` — Consulta de usuários
- `POST /favorecido` — Adiciona favorecido ao usuário
- `POST /transferir` — Realiza transferência
- `GET /transferencias` — Consulta transferências
- `GET /api-docs` — Documentação Swagger

## Regras de Negócio

- Login exige usuário e senha.
- Não é permitido registrar usuários duplicados.
- Transferências acima de R$ 5.000,00 só podem ser feitas para favorecidos.
- Banco de dados em memória (variáveis).

## Testes

Para testar com Supertest, importe o `app.js`.

## Documentação

Acesse `/api-docs` para visualizar e testar os endpoints via Swagger.

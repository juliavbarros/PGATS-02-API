module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'PGATS-02 API',
    version: '1.0.0',
    description: 'API para login, registro, consulta de usuários e transferências.'
  },
  paths: {
    '/register': {
      post: {
        summary: 'Registrar novo usuário',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  username: { type: 'string' },
                  password: { type: 'string' }
                },
                required: ['username', 'password']
              }
            }
          }
        },
        responses: {
          201: { description: 'Usuário registrado com sucesso.' },
          400: { description: 'Erro de validação ou usuário duplicado.' }
        }
      }
    },
    '/login': {
      post: {
        summary: 'Login de usuário',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  username: { type: 'string' },
                  password: { type: 'string' }
                },
                required: ['username', 'password']
              }
            }
          }
        },
        responses: {
          200: { description: 'Login realizado com sucesso.' },
          400: { description: 'Usuário ou senha inválidos.' }
        }
      }
    },
    '/users': {
      get: {
        summary: 'Consultar todos os usuários',
        responses: {
          200: { description: 'Lista de usuários.' }
        }
      }
    },
    '/favorecido': {
      post: {
        summary: 'Adicionar favorecido ao usuário',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  username: { type: 'string' },
                  favorecido: { type: 'string' }
                },
                required: ['username', 'favorecido']
              }
            }
          }
        },
        responses: {
          200: { description: 'Favorecido adicionado.' },
          400: { description: 'Erro ao adicionar favorecido.' }
        }
      }
    },
    '/transferir': {
      post: {
        summary: 'Realizar transferência',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  remetente: { type: 'string' },
                  destinatario: { type: 'string' },
                  valor: { type: 'number' }
                },
                required: ['remetente', 'destinatario', 'valor']
              }
            }
          }
        },
        responses: {
          201: { description: 'Transferência realizada.' },
          400: { description: 'Erro nas regras de transferência.' }
        }
      }
    },
    '/transferencias': {
      get: {
        summary: 'Consultar todas as transferências',
        responses: {
          200: { description: 'Lista de transferências.' }
        }
      }
    }
  }
};
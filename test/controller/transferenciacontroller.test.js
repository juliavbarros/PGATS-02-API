const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');

const app = require('../../app');

describe('Transferencia Controller', () => {
    describe('POST /transferir', () => {

        it('Quando informo remetente e destinatario inexistente recebo 400', async () => {
            const resposta = await request(app)
                .post('/transferir')
                .send({
                    remetente: "Júlio",
                    destinatario: "priscila",
                    valor: 100

                });
            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error', 'Remetente não existe.');


        })

    });

    describe('GET /transferencias', () => {

    });
})
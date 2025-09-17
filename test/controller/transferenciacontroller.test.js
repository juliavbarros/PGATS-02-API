const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');

const app = require('../../app');

//Mock 
const transferenciaservice = require('../../services/transferenciaservice');

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


        });

        
        it('Usando Mocks: Quando informo remetente e destinatario inexistente recebo 400', async () => {
            //Mocar apenas a função transfer do Service

            const transferenciaserviceMock = sinon.stub(transferenciaservice,'transferir');
            transferenciaserviceMock.throws(new Error('Remetente não existe.'));

            const resposta = await request(app)
                .post('/transferir')
                .send({
                    remetente: "Júlio",
                    destinatario: "priscila",
                    valor: 100

                });
            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error', 'Remetente não existe.');

            // Reset o Mock
            sinon.restore();


        });

        it('Usando Mocks: Quando informo valores validos eu tenho sucesso com 201 CREATED', async () => {
            //Mocar apenas a função transfer do Service

            const transferenciaserviceMock = sinon.stub(transferenciaservice,'transferir');
            transferenciaserviceMock.returns({
                remetente: "Júlio",
                destinatario: "priscila",
                valor: 100,
                date: new Date(),

            });

            const resposta = await request(app)
                .post('/transferir')
                .send({
                    remetente: "Júlio",
                    destinatario: "priscila",
                    valor: 100

                });
            expect(resposta.status).to.equal(201);
            expect(resposta.body).to.have.property('remetente', 'Júlio');
            expect(resposta.body).to.have.property('destinatario', 'priscila');
            expect(resposta.body).to.have.property('valor', 100);
            

            // Reset o Mock
            sinon.restore();


        });

    });

    describe('GET /transferencias', () => {

    });
})
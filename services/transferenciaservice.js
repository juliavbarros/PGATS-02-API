const Transfer = require('../models/transferenciamodel');
const { isFavorecido } = require('./userservice');

const transferencias = [];

function transferir(remetente, destinatario, valor) {
  if (!remetente || !destinatario || !valor) return { error: 'Dados obrigatórios.' };
  if (!isFavorecido(remetente, destinatario) && valor >= 5000) {
    return { error: 'Transferências acima de R$ 5.000,00 só podem ser feitas para favorecidos.' };
  }
  const transferencia = new Transfer(remetente, destinatario, valor);
  transferencias.push(transferencia);
  return transferencia;
}

function getAllTransferencias() {
  return transferencias;
}

module.exports = { transferir, getAllTransferencias };
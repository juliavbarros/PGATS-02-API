const Transfer = require('../models/transferenciamodel');
const { isFavorecido, getAllUsers } = require('./userservice');

const transferencias = [];

function transferir(remetente, destinatario, valor) {
  const users = getAllUsers();
  if (!remetente || !destinatario || !valor) return { error: 'Dados obrigatórios.' };
  if (!users.find(u => u.username === remetente)) return { error: 'Remetente, não existe.' };
  if (!users.find(u => u.username === destinatario)) return { error: 'Destinatário não existe.' };
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
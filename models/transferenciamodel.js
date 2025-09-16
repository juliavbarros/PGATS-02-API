class Transfer {
  constructor(remetente, destinatario, valor) {
    this.remetente = remetente;
    this.destinatario = destinatario;
    this.valor = valor;
    this.data = new Date();
  }
}

module.exports = Transfer;
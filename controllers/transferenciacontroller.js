const transferenciaservice = require('../services/transferenciaservice');

const transferir = (req, res) => {
  const { remetente, destinatario, valor } = req.body;
  const result = transferenciaservice.transferir(remetente, destinatario, valor);
  if (result.error) return res.status(400).json({ error: result.error });
  res.status(201).json(result);
};

const getAllTransferencias = (req, res) => {
  res.json(transferenciaservice.getAllTransferencias());
};

module.exports = { transferir, getAllTransferencias };
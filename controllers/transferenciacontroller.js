const transferenciaservice = require('../services/transferenciaservice');

const transferir = (req, res) => {
  const { remetente, destinatario, valor } = req.body;
  try {
    const result = transferenciaservice.transferir(remetente, destinatario, valor);
    if (result.error) {
      return res.status(400).json({ error: result.error });
    }
    return res.status(201).json(result);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const getAllTransferencias = (req, res) => {
  res.json(transferenciaservice.getAllTransferencias());
};

module.exports = { transferir, getAllTransferencias };
const userservice = require('../services/userservice');

const register = (req, res) => {
  const { username, password } = req.body;
  const result = userservice.register(username, password);
  if (result.error) return res.status(400).json({ error: result.error });
  res.status(201).json(result);
};

const login = (req, res) => {
  const { username, password } = req.body;
  const result = userservice.login(username, password);
  if (result.error) return res.status(400).json({ error: result.error });
  res.json(result);
};

const getAllUsers = (req, res) => {
  res.json(userservice.getAllUsers());
};

const addFavorecido = (req, res) => {
  const { username, favorecido } = req.body;
  const result = userservice.addFavorecido(username, favorecido);
  if (result.error) return res.status(400).json({ error: result.error });
  res.json(result);
};

module.exports = { register, login, getAllUsers, addFavorecido };
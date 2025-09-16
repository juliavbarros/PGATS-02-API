const User = require('../models/usermodel');

const users = [];

function register(username, password) {
  if (!username || !password) return { error: 'Usuário e senha obrigatórios.' };
  if (users.find(u => u.username === username)) return { error: 'Usuário já existe.' };
  const user = new User(username, password);
  users.push(user);
  return user;
}

function login(username, password) {
  if (!username || !password) return { error: 'Usuário e senha obrigatórios.' };
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return { error: 'Usuário ou senha inválidos.' };
  return user;
}

function getAllUsers() {
  return users;
}

function addFavorecido(username, favorecido) {
  const user = users.find(u => u.username === username);
  if (!user) return { error: 'Usuário não encontrado.' };
  if (!users.find(u => u.username === favorecido)) return { error: 'Favorecido não existe.' };
  if (!user.favorecidos.includes(favorecido)) user.favorecidos.push(favorecido);
  return user;
}

function isFavorecido(remetente, destinatario) {
  const user = users.find(u => u.username === remetente);
  return user && user.favorecidos.includes(destinatario);
}

module.exports = { register, login, getAllUsers, addFavorecido, isFavorecido };
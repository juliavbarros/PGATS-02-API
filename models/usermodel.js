class User {
  constructor(username, password, favorecidos = []) {
    this.username = username;
    this.password = password;
    this.favorecidos = favorecidos; // array de usernames
  }
}

module.exports = User;
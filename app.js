const express = require('express');
const userController = require('./controllers/usercontroller');
const transferenciaController = require('./controllers/transferenciacontroller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');

const app = express();
app.use(express.json());

app.post('/register', userController.register);
app.post('/login', userController.login);
app.get('/users', userController.getAllUsers);
app.post('/favorecido', userController.addFavorecido);

app.post('/transferir', transferenciaController.transferir);
app.get('/transferencias', transferenciaController.getAllTransferencias);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
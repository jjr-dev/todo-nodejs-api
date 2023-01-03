// Configurações
require('dotenv').config();

const express  = require('express');

const app  = express();
const port = 3000;

// Leitura / Middlewares
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

// Iniciar
app.listen(port)

// Banco de Dados
const connectDatabase = require('./db')
connectDatabase();

// Rotas
const taskRoutes = require('./src/routes/Task')

app.use('/task', taskRoutes);
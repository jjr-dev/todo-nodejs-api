// Configurações
require('dotenv').config();

const express = require('express');

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
const authRoutes = require('./src/routes/Auth')
const userRoutes = require('./src/routes/User')

app.use('/task', taskRoutes);
app.use('/user', userRoutes);
app.use('/auth', authRoutes);
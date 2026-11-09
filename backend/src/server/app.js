const express = require('express')
const cors = require('cors')
require('dotenv').config()

const { serverLog } = require('./middlewares/serverLog.middleware.js')
const { usuariosRouter, productosRouter, errors } = require('./routers/index.js')
const { ClientBase } = require('pg')

const app = express()
const PORT = process.env.PORT ?? 3000
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173'

app.use(cors({
  origin: [CLIENT_URL, 'http://127.0.0.1:5173'],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json())

app.use(serverLog)

app.use(productosRouter)
app.use(usuariosRouter)
app.use(errors)

app.listen(PORT, () => console.log('Server UP!!'))

module.exports = app

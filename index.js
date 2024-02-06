const express = require('express')
const app = express()
const routes = require('./routes')
const publicRoutes = require('./publicRoutes')
const UsuarioController = require('./controllers/UsuarioController')
const cors = require('cors')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/', publicRoutes)
app.use('/', UsuarioController.verificarToken, routes)

app.listen(443, () => {
  console.log(`Servidor iniciado`)
})
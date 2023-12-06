const UsuarioController = require('./controllers/UsuarioController')

const router = require('express').Router()

router.post('/usuarios', UsuarioController.store)

module.exports = router
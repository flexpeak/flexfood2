const UsuarioController = require('./controllers/UsuarioController')

const router = require('express').Router()

router.post('/usuarios', UsuarioController.store)
router.post('/usuarios/login', UsuarioController.login)

module.exports = router
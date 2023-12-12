const RestauranteController = require('./controllers/RestauranteController')
const UsuarioController = require('./controllers/UsuarioController')

const router = require('express').Router()

router.post('/usuarios', UsuarioController.store)
router.post('/usuarios/login', UsuarioController.login)

router.get('/restaurantes', UsuarioController.verificarToken, RestauranteController.index)
router.post('/restaurantes', UsuarioController.verificarToken, RestauranteController.store)
router.get('/restaurantes/:id', UsuarioController.verificarToken, RestauranteController.show)
router.put('/restaurantes/:id', UsuarioController.verificarToken, RestauranteController.update)
router.delete('/restaurantes/:id', UsuarioController.verificarToken, RestauranteController.destroy)

module.exports = router
const RestauranteController = require('./controllers/RestauranteController')
const UsuarioController = require('./controllers/UsuarioController')

const router = require('express').Router()

router.post('/usuarios', UsuarioController.store)
router.post('/usuarios/login', UsuarioController.login)

router.get('/restaurantes', RestauranteController.index)
router.post('/restaurantes', UsuarioController.verificarToken, RestauranteController.store)
router.get('/restaurantes/:id', RestauranteController.show)
router.put('/restaurantes/:id', RestauranteController.update)
router.delete('/restaurante/:id', RestauranteController.destroy)

module.exports = router
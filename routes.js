const multer = require('multer')
const path = require('path')

const upload = multer({ storage: multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
}) })

const RestauranteController = require('./controllers/RestauranteController')
const UsuarioController = require('./controllers/UsuarioController')
const ItemController = require('./controllers/ItemController')

const router = require('express').Router()

router.post('/usuarios', UsuarioController.store)
router.post('/usuarios/login', UsuarioController.login)

router.get('/restaurantes', UsuarioController.verificarToken, RestauranteController.index)
router.post('/restaurantes', UsuarioController.verificarToken, RestauranteController.store)
router.get('/restaurantes/:id', UsuarioController.verificarToken, RestauranteController.show)
router.put('/restaurantes/:id', UsuarioController.verificarToken, RestauranteController.update)
router.delete('/restaurantes/:id', UsuarioController.verificarToken, RestauranteController.destroy)

router.get('/itens/:restaurante_id', UsuarioController.verificarToken, ItemController.index)
router.post('/itens/:restaurante_id', UsuarioController.verificarToken, upload.single('foto'), ItemController.store)
router.get('/itens/:restaurante_id/:id', UsuarioController.verificarToken, ItemController.show)
// router.put('/itens/:restaurante_id/:id', UsuarioController.verificarToken, ItemController.update)
// router.delete('/itens/:restaurante_id/:id', UsuarioController.verificarToken, ItemController.destroy)

module.exports = router
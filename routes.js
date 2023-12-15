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
const ItemController = require('./controllers/ItemController')
const PedidoClienteController = require('./controllers/PedidoClienteController')
const PedidoRestauranteController = require('./controllers/PedidoRestauranteController')

const router = require('express').Router()

router.get('/restaurantes', RestauranteController.index)
router.post('/restaurantes', RestauranteController.store)
router.get('/restaurantes/:id', RestauranteController.show)
router.put('/restaurantes/:id', RestauranteController.update)
router.delete('/restaurantes/:id', RestauranteController.destroy)

router.get('/itens/:restaurante_id', ItemController.index)
router.post('/itens/:restaurante_id', upload.single('foto'), ItemController.store)
router.get('/itens/:restaurante_id/:id', ItemController.show)
router.put('/itens/:restaurante_id/:id', upload.single('foto'), ItemController.update)
router.delete('/itens/:restaurante_id/:id', ItemController.destroy)

router.get('/cliente/pedidos', PedidoClienteController.index)
router.post('/cliente/pedidos', PedidoClienteController.create)
router.get('/cliente/pedidos/:id', PedidoClienteController.show)
router.put('/cliente/pedidos/:id', PedidoClienteController.update)

router.get('/restaurante/pedidos/:restaurante_id', PedidoRestauranteController.index)
router.put('/restaurante/pedidos/:id/:restaurante_id', PedidoRestauranteController.update)

module.exports = router
const { pedidos } = require('../models')

class PedidoRestauranteController {
  static async index(req, res) {
    try {
      const pedidosList = await pedidos.findAll({
        include: ['usuario', 'restaurante', 'itens']
      })

      res.json(pedidosList)
    } catch (e) {
      console.error(e)
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  static async update(req, res) {
    try {
      const pedido = await pedidos.findOne({
        where: {
          id: req.params.id
        }
      })

      await pedido.update({
        status: req.body.status
      })

      res.json(pedido)
    } catch (e) {
      console.error(e)
      res.status(500).json({ error: 'Internal server error' })
    }
  }
}

module.exports = PedidoRestauranteController
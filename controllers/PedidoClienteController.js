const { pedidos } = require('../models')
const { pedidos_itens } = require('../models')

class PedidoClienteController {

  static async index(req, res) {
    try {
      const pedidosList = await pedidos.findAll({
        where: {
          usuario_id: req.usuario_id
        },
        include: ['usuario', 'restaurante', 'itens']
      })

      res.json(pedidosList)
    } catch (e) {
      console.error(e)
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  static async show(req, res) {
    try {
      const pedido = await pedidos.findOne({
        where: {
          id: req.params.id,
          usuario_id: req.usuario_id
        },
      })

      res.json(pedido)
    } catch (e) {
      console.error(e)
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  static async create(req, res) {
    try {
      const pedido = await pedidos.create({
        status: req.body.status,
        restaurante_id: req.body.restaurante_id,
        usuario_id: req.usuario_id,
        data_hora: new Date(),
      })
  
      var itens = []
      req.body.itens.forEach(async function (item) {
        const pedido_item = await pedidos_itens.create({
          pedido_id: pedido.id,
          item_id: item.item_id,
          quantidade: item.quantidade,
        })
        itens.push(pedido_item)
      })

      pedido.itens = itens

      res.json(pedido)
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

module.exports = PedidoClienteController
const { itens } = require('../models')

class ItemController {
  static async show(req, res) {
    try {
      const item = await itens.findOne({
        where: {
          id: req.params.id,
          restaurante_id: req.params.restaurante_id
        }
      })

      res.json(item)
    } catch (e) {
      console.log(e)
      res.status(500).json({
        error: "Não foi possível realizar operação"
      })
    }
  }

  static async index(req, res) {
    try {
      const itensList = await itens.findAll({
        where: {
          restaurante_id: req.params.restaurante_id
        }
      })

      res.json(itensList)

    } catch (e) {
      console.log(e)
      res.status(500).json({
        error: "Não foi possível realizar operação"
      })
    }
  }

  static async store(req, res) {
    try {
      const item = await itens.create({
        tipo: req.body.tipo,
        valor: req.body.valor,
        foto: req.file.path,
        nome: req.body.nome,
        descricao: req.body.descricao,
        restaurante_id: req.params.restaurante_id,
        quantidade_estoque: req.body.quantidade_estoque
      })

      res.json(item)
    } catch (e) {
      console.log(e)
      res.status(500).json({
        error: "Não foi possível realizar operação"
      })
    }
  }

  static async update(req, res) {
    try {
      const item = await itens.findOne({
        where: {
          id: req.params.id,
          restaurante_id: req.params.restaurante_id
        }
      })

      await item.update({
        tipo: req.body.tipo,
        valor: req.body.valor,
        foto: req.file ? req.file.path : item.foto,
        nome: req.body.nome,
        descricao: req.body.descricao,
        quantidade_estoque: req.body.quantidade_estoque 
      })

      res.json(item)

    } catch (e) {
      console.log(e)
      res.status(500).json({
        error: "Não foi possível realizar operação"
      })
    }
  }

  static async destroy(req, res) {
    try {
      const item = await itens.findOne({
        where: {
          id: req.params.id,
          restaurante_id: req.params.restaurante_id
        }
      })

      await item.destroy();
      res.json({
        success: true
      })
    } catch (e) {
      console.log(e)
      res.status(500).json({
        error: "Não foi possível realizar operação"
      })
    }
  }
}

module.exports = ItemController;
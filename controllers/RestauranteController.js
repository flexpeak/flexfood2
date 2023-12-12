const { restaurantes } = require('../models')

class RestauranteController {
  static async store(req, res) {
    try {
      const restaurante = await restaurantes.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        usuario_id: req.usuario_id
      })

      res.json(restaurante)
    } catch (e) {
      console.log(e)
      res.status(500).json({
        error: "Não foi possível realizar operação"
      })
    }
  }

  static async index(req, res) {
    try {
      const restaurantesList = await restaurantes.findAll({
        where: {
          usuario_id: req.usuario_id
        }
      })

      res.json(restaurantesList)
    } catch (e) {
      console.log(e)
      res.status(500).json({
        error: "Não foi possível realizar operação"
      })
    }
  }

  static async show(req, res) {
    try {
      const id = req.params.id
      const restaurante = await restaurantes.findOne({
        where: {
          usuario_id: req.usuario_id,
          id: id
        }
      })
      res.json(restaurante)
    } catch (e) {
      console.log(e)
      res.status(500).json({
        error: "Não foi possível realizar operação"
      })
    }
  }

  static async update(req, res) {
    try {
      const id = req.params.id
      const restaurante = await restaurantes.findOne({
        where: {
          id: id,
          usuario_id: req.usuario_id
        }
      })

      restaurante.update({
        nome: req.body.nome,
        telefone: req.body.telefone,
        endereco: req.body.endereco
      })

      res.json(restaurante)

    } catch (e) {
      console.log(e)
      res.status(500).json({
        error: "Não foi possível realizar operação"
      })
    }
  }

  static async destroy(req, res) {
    try {
      const id = req.params.id
      const resturante = await restaurantes.findOne({
        where: {
          id: id,
          usuario_id: req.usuario_id
        }
      })

      resturante.destroy()

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

module.exports = RestauranteController
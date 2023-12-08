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

  }

  static async show(req, res) {

  }

  static async update(req, res) {

  }

  static async destroy(req, res) {

  }
}

module.exports = RestauranteController
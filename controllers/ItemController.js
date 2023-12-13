const { itens } = require('../models')

class ItemController {
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
}

module.exports = ItemController;
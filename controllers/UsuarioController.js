const { usuarios } = require('../models')

class UsuarioController {
  static async store(req, res) { 
    try {
      const usuario = await usuarios.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        tipo: req.body.tipo,
        senha: req.body.senha,
        email: req.body.email
      })
  
      res.json(usuario)
    } catch(error) {
      console.log(error)
      res.status(500).json({
        "error": "Não foi possível realizar essa operação"
      }) 
    } 
    
  }
}

module.exports = UsuarioController
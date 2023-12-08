const { usuarios } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class UsuarioController {
  static async store(req, res) { 
    try {

      const salt = await bcrypt.genSalt(12)
      const senha = await bcrypt.hash(req.body.senha, salt)

      const usuario = await usuarios.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        tipo: req.body.tipo,
        senha: senha,
        email: req.body.email
      })
  
      res.json({
        id: usuario.id,
        nome: usuario.nome,
        telefone: usuario.telefone,
        endereco: usuario.endereco,
        tipo: usuario.tipo,
        email: usuario.email
      })
    } catch(error) {
      console.log(error)
      res.status(500).json({
        "error": "Não foi possível realizar essa operação"
      }) 
    } 
    
  }

  static async login(req, res) {

    const usuario = await usuarios.findOne({
      where: {
        email: req.body.email
      }
    })

    if (usuario) {
      const match = await bcrypt.compare(req.body.senha, usuario.senha)
      if (match) {
        const token = await jwt.sign(usuario.id, '#!@#')
        res.json({
          token: token
        })
      } else {
        res.status(401).json({
          error: "Usuário ou senha inválda"
        })
      }
    } else {
      res.status(401).json({
        error: "Usuário ou senha inválida"
      })
    }
  }

  static async verificarToken(req, res, next) {
    const token = req.headers['authorization']
    jwt.verify(token, '#!@#', async (error, success) => {
      req.usuario_id = success
    })
    next()
  }
}

module.exports = UsuarioController
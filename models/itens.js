'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class itens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  itens.init({
    tipo: DataTypes.ENUM('B', 'C'),
    valor: DataTypes.DECIMAL(8, 2),
    foto: DataTypes.STRING,
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    restaurante_id: DataTypes.INTEGER,
    quantidade_estoque: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'itens',
  });
  return itens;
};
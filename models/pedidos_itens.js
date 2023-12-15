'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pedidos_itens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pedidos_itens.init({
    quantidade: DataTypes.DECIMAL,
    item_id: DataTypes.INTEGER,
    pedido_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pedidos_itens',
  });
  return pedidos_itens;
};
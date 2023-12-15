'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pedidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.usuarios, {
        foreignKey: 'usuario_id',
        as: 'usuario'
      });

      this.belongsTo(models.restaurantes, {
        foreignKey: 'restaurante_id',
        as: 'restaurante'
      })

      this.belongsToMany(models.itens, {
        through: 'pedidos_itens',
        foreignKey: 'pedido_id',
        otherKey: 'item_id',
        as: 'itens'
      })
    }
  }
  pedidos.init({
    status: DataTypes.CHAR(1),
    restaurante_id: DataTypes.INTEGER,
    usuario_id: DataTypes.INTEGER,
    data_hora: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'pedidos',
  });
  return pedidos;
};
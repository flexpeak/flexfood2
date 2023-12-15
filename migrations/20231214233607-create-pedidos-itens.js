'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pedidos_itens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantidade: {
        type: Sequelize.DECIMAL
      },
      item_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'itens'
          },
          key: 'id'
        }
      },
      pedido_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'pedidos'
          },
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pedidos_itens');
  }
};
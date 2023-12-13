'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('itens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipo: {
        type: Sequelize.ENUM('B', 'C')
      },
      valor: {
        type: Sequelize.DECIMAL(8, 2)
      },
      foto: {
        type: Sequelize.STRING
      },
      nome: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      restaurante_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'restaurantes'
          },
          key: 'id'
        }
      },
      quantidade_estoque: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('itens');
  }
};
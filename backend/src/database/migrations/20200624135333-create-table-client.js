'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('clients', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        gender: {
          type: Sequelize.STRING,
          allowNull: true,          
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        birthday: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        created_at:{
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull: false,
        },
       },
       {
         schema:'geraldovilela',
       });
    
    },

  down:  (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('clients')
  }
};

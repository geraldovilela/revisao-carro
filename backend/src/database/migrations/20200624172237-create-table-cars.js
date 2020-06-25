'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('cars', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        carplate: {
          primaryKey:true,
          type: Sequelize.STRING,
          allowNull: false,
         
        },
        client_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model:'clients', key:'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        carcolor: {
          type: Sequelize.STRING,
          allowNull: false,          
        },
        carmanufacturer: {
          type: Sequelize.STRING,
          allowNull:false
        },
        carmodel:{
          type: Sequelize.STRING,
          allowNull:false,
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
    
    return queryInterface.dropTable('cars',{},{schema:'geraldovilela'})
  }
};

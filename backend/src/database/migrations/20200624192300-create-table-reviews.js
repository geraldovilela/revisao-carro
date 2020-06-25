'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('reviews', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        car_plate: {
          type: Sequelize.STRING,
          allowNull: false,
          primaryKey: true,
        },
        client_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model:'clients', key:'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        review_number:{
          type: Sequelize.INTEGER,
          defaultValue:0,
        },
        car_mileage: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        review_value:{
          type: Sequelize.DECIMAL(11,2),
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
    
    return queryInterface.dropTable('reviews',{schema:'geraldovilela'})
  }
};

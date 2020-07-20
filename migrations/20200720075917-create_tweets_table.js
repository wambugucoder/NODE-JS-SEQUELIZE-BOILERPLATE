'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   queryInterface.createTable("tweets",{
      id:{
        type:Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
        },
           content: {
              type: Sequelize.STRING(300),
              allowNull: false
            },
            userId:Sequelize.INTEGER(11),
            createdAt:Sequelize.DATE,
            updatedAt:Sequelize.DATE

    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("tweets");
  }
};

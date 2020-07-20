'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   queryInterface.createTable("users", {
    // Model attributes are defined here
id:{
type:Sequelize.INTEGER(11),
allowNull:false,
autoIncrement:true,
primaryKey:true
},
   username: {
      type: Sequelize.STRING(35),
      allowNull: false,
      unique:true
    },
   password: {
        type: Sequelize.STRING(20),
        allowNull: false,
        
      },
      createdAt:Sequelize.DATE,
      updatedAt:Sequelize.DATE
  })
  },
  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("users");
  }
};

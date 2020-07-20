const  Sequelize  = require('sequelize');
const sequelize = require('../database/connection');

module.exports=sequelize.define('User', {
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
 
   
  });
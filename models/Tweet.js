const  Sequelize  = require('sequelize');
const sequelize = require('../database/connection');

module.exports=sequelize.define('Tweet', {
    // Model attributes are defined here
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
   
 
   
  });
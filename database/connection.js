const Sequelize  = require('sequelize');

const sequelize = new Sequelize('crud', 'root', 'Josphatwambugu12', {
    host: '127.0.0.1',
    dialect:  'mysql' ,
    operatorsAliases:false
  });
  sequelize.authenticate().then(() => {
    console.log('Connection established successfully.');
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  })
  module.exports=sequelize;
  global.sequelize=sequelize;
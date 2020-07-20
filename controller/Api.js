const express = require('express');
const router = express.Router();
const Tweet =require("../models/Tweet");
const User=require("../models/User");

//ASSOCIATION
User.hasMany(Tweet,{as:"Tweets",foreignKey:'userId'})
Tweet.belongsTo(User,{as:"Users",foreignKey:'userId'})

//CREATE USER
router.post('/create', (req, res) => {
    User.create({username:'Jos',password:'123'})
    .then(user => {
       res.json(user);
    }).catch(err=>console.log(err))
});
 

//CREATE TWEET
router.post('/tweets', (req, res) => {
    Tweet.create({content:"Hello World",userId:"1"})
    .then(tweet => {
       res.json(tweet);
    }).catch(err=>res.json(err))
});

//GET ALL TWEETS WITH A CERTAIN USER
router.get('/get', (req, res) => {
    User.findAll({where:{username:"Jos"},include:[{model:Tweet,as:"Tweets"}]})
    .then(user => {
       res.json(user);
    }).catch(err=>console.log(err))
});

module.exports = router

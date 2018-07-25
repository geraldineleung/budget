const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  router.post('/login',(req,res)=>{
    let creds = req.body;
    knex('user').select().where({username:creds.username,password:creds.password}).then((user)=>{
      res.json(user);
    });
  });
  router.post('/register',(req,res)=>{
    let nuser = req.body;//the new user coming from the client
    delete nuser.user_id;//sanitizing the new user
    knex('user').insert(nuser).then((user_id)=>{
      res.json(user_id);//returning the new user id to the client
    });
  });
  router.put('/save',(req,res)=>{
    let user = req.body;
    knex('user').update().where({user_id:user.user_id}).then((user)=>{
      res.json(user);
    });
  });
};
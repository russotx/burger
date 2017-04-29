const express = require('express');
const router = express.Router();
const burgerOps = require('../models/burger.js');

const Table = 'burgers';

router.get('/',function(req,res){
  let viewObj = {
    viewArr : burgerOps.all(Table)
  };
  res.render('index',viewObj);
});

router.post('/',function(req,res){
  let action = req.body;
  burgerOps.update(Table,action,function(result){
    res.redirect('/');
  });
});

router.put('/',function(req,res){
  let action = req.body;
  burgerOps.insert(Table,action,function(result){
    res.redirect('/');
  });
});

module.exports = router;

console.log('hello');
const express = require('express');
const router = express.Router();
const burgerOps = require('../models/burger.js');

const Table = 'burgers';

router.get('/',function(req,res){
  burgerOps.all(Table,function(result){
    let viewObj = {
      viewArr : result
    };
    res.render('index',viewObj);
  });
});

router.post('/add',function(req,res){
  let action = req.body;
  burgerOps.insert(Table,action,function(result){
    res.redirect('/');
  });
});

router.put('/devour',function(req,res){
  let action = req.body;
  burgerOps.update(Table,action,function(){
    res.redirect('/');
  });
});

module.exports = router;

console.log('hello');
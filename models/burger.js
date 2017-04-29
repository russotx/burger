const orm = require('../config/orm.js');

let burgerOps = {

  all : function(tbl){
          orm.selectALL(tbl,function(result){
            return result;
          });
        },
  update : function(tbl,obj,callback){
    orm.updateOne(tbl,obj,function(result){
      callback(result);
    });
  },
  insert : function(tbl,obj,callback){
    orm.insertOne(tbl,obj,function(result){
      callback(result);
    });
  }
};

module.exports = burgerOps;





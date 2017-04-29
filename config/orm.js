const burgerDB = require('./connection.js');

const orm = {
  
  selectALL : function(table,callback){
    const query = "SELECT * FROM "+table+";";
    burgerDB.query(query,function(err,result){
      if (err) throw err;
      callback(result);
    });

  },

  insertOne : function(table,obj,callback){
    const query = "INSERT INTO ? VALUES (?,?)";
    burgerDB.query(query,[table,obj.name,obj.devoured],function(err,result){
      if (err) throw err;
      callback(result);
    });
  },

  updateOne : function(table,obj,callback){
    const query = "UPDATE "+table+" SET `devoured`=true WHERE `burger_name`='"+obj.name+"'";
    burgerDB.query(query,function(err,result){
      if (err) throw err;
      callback(result);
    });
  }

};

module.exports = orm;


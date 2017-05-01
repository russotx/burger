const burgerDB = require('./connection.js');

const orm = {
  
  selectALL : function(table,callback){
    let query = "SELECT * FROM "+table+";";
    burgerDB.query(query,function(err,result){
      if (err) throw err;
      callback(result);
    });

  },

  insertOne : function(table,obj,callback){
    let query = "INSERT INTO "+table+' (burger_name,devoured) VALUES ("'+obj.name+'",false)';
    console.log(query);
    burgerDB.query(query,function(err,result){
      if (err) throw err;
      callback(result);
    });
  },

  updateOne : function(table,obj,callback){
    let query = 'UPDATE '+table+' SET devoured=true WHERE burger_name="'+obj.name+'";';
    burgerDB.query(query,function(err,result){
      if (err) throw err;
      callback(result);
    });
  }

};

module.exports = orm;


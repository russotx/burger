const burgerDB = require('connection.js');

const orm = {
  
  selectALL : function(table,callback){
    const query = "SELECT * FROM ?";
    burgerDB.query(query,[table],function(err,result){
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
    const query = "UPDATE ? SET devoured=? WHERE id=?";
    burgerDB.query(query,[table,obj.devoured,obj.id],function(err,result){
      if (err) throw err;
      callback(result);
    });
  }

};

module.exports = orm;


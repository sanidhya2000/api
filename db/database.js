const  mysql= require ('mysql');

const PlayerPOOL = mysql.createPool({
  connectionLimit : 10,
  host :'localhost',
  user :'root',
  password :'Priyesh',
  database : 'localdb',
  debug : false
});



function executeQuery(sql ,callback){
  PlayerPOOL.getConnection((err,connection) => {
  if(err){
    return callback(err,null)
  }
  else{
    if(connection){
      connection.query(sql, function(error ,flied,result){
        connection.release();
        if(error){
          return callback(error,null);
        }
        return callback(null,result)
      });
    }
  }
  });
}


function query(sql,callback){
  executeQuery(sql,function(err,data){
    if(err){
      return callback(err);
    }
    callback(null,data);
  });
}


module.exports = {
  query:query
}

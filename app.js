const express = require('express');
const bodyParser= require("body-parser");
const products = require ('./api/products');
const cors = require('cors');

 const app = express();
 app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/product',products);

app.use((res,req,next) => {

  const err = new Error("NOT FOUND");
  err.status =404;
  next(err);

});

app.use((err,res,req,next) => {
  res.status(err.status || 501);
  res.json({
    error:{
      code: err.status || 501,
      message:err.message
    }
  });
});
module.exports = app;

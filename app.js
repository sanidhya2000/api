const express = require('express');
const bodyParser= require("body-parser");
const products = require ('./api/products');
const cors = require('cors');

 const app = express();
 app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
  console.log("This is Working")
})
app.use('/product',products);


module.exports = app;

const express = require('express');
const db = require('../db/database');
const players = require ( '../domain/product');


const router = express.Router();


router.get('/',(res,req,next) =>{
      db.query(players.getAllPlayerSQL(),(err,data) => {
        if(!err){
          res.status(200).json({
            message: 'players listed',
            playerId:data
          });
        }
     });
});


router.post('/add' ,(res,req,next) => {
  let players = new players(req.body.player_name,req.body.player_scored,req.body.player_attempted,
   req.body.player_passes,req.body.player_passes_attm,req.body.player_tacles_attm,req.body.player_won)

    db.query(players.getAddPlayerSQL(),(err,data) => {
      if(!err){
        res.status(200).json({
          message: 'player inserted',
          playerId:data.insertId
        });
      }

    });
})

module.exports = router;

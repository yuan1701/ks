let express = require('express');
let test1DB = require('../db/test1DB')
let test1 = require('../model/test1')

let router = express.Router();

//查询所有
router.get('/findAll',(req,resp)=>{
  test1DB.findAll().then(function(results){
    resp.send(results);
  }).catch(function(error){
    resp.send(error);
  });
});
//delete
router.post('/batchDelete',(req,resp)=>{
  test1DB.batchDelete(req.body).then(function(results){
    resp.send(results);
  }).catch(function(error){
    resp.send(error);
  });
});
//通过id查询
router.get('/findById',(req,resp)=>{
  studentDB.findById(req.query.id).then(function(results){
    resp.send(results);
  }).catch(function(error){
    resp.send(error);
  });
});

module.exports = router;

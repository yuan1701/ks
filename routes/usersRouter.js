let express = require('express');
let usersDB = require('../db/usersDB')
let users = require('../model/users')

let router = express.Router();

//查询所有
router.get('/findAll',(req,resp)=>{
  usersDB.findAll().then(function(results){
    resp.send(results);
  }).catch(function(error){
    resp.send(error);
  });
});

//通过name查询
router.get('/findByName',(req,resp)=>{
  usersDB.findByName(req.query.name).then(function(results){
    resp.send(results);
  }).catch(function(error){
    resp.send(error);
  });
});
//保存
// router.post('/save',(req,resp)=>{
//   var student = new users();
//   Object.assign(student,req.body);
//   studentDB.save(student).then(function(results){
//     resp.send(results);
//   }).catch(function(error){
//     resp.send(error);
//   });
// });
// update
// router.post('/update',(req,resp)=>{
//   var student = new Student();
//   Object.assign(student,req.body);
//   studentDB.update(student).then(function(results){
//     resp.send(results);
//   }).catch(function(error){
//     resp.send(error);
//   });
// });

module.exports = router;
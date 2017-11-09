let express = require('express');
let testDB = require('../db/testDB')
let test = require('../model/test')

let router = express.Router();

//查询所有
router.get('/findAll',(req,resp)=>{
  testDB.findAll().then(function(results){
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
//关键字查找
//localhost:3000/student/query/张三
router.get('/query/:keys',(req,resp)=>{
  studentDB.query(req.params.keys).then(function(results){
    resp.send(results);
  }).catch(function(error){
    resp.send(error);
  });
});

//保存
router.post('/save',(req,resp)=>{
  var student = new Student();
  Object.assign(student,req.body);
  studentDB.save(student).then(function(results){
    resp.send(results);
  }).catch(function(error){
    resp.send(error);
  });
});
// update
router.post('/update',(req,resp)=>{
  var student = new Student();
  Object.assign(student,req.body);
  studentDB.update(student).then(function(results){
    resp.send(results);
  }).catch(function(error){
    resp.send(error);
  });
});
//delete
router.post('/batchDelete',(req,resp)=>{
  studentDB.batchDelete(req.body).then(function(results){
    resp.send(results);
  }).catch(function(error){
    resp.send(error);
  });
})

module.exports = router;
require('babel-polyfill');
let users = require('../model/users');
let usersDB = require('./usersDB');

//查询所有
usersDB.findAll().then(function(results){
  console.log(results);
}).catch(function(error){
  console.log("报错了！",error);
});
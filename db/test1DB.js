let pool = require('./pool');

module.exports = {
  //查询所有
  findAll(){
    let sql = "select * from test1";
    return pool.execute(sql);
  },
   //删除
  batchDelete(ids){
    let sql = "delete from student where id in ("+ids.join()+")";
    return pool.execute(sql);
  },
    //通过id查询
  findById(id){
    let sql = "select * from student where id = "+id;
    return pool.execute(sql);  
  },
}
let pool = require('./pool');

module.exports = {
  //查询所有
  findAll(){
    let sql = "select * from test";
    return pool.execute(sql);
  },
  //通过id查询
  findById(id){
    let sql = "select * from student where id = "+id;
    return pool.execute(sql);  
  },
//   //模糊查询  
//   query(keys){
//     let sql = "select * from student where name like '%"
//     +keys+"%' or gender like '%"
//     +keys+"%'";
//     return pool.execute(sql);
//   },
  //保存
   save(test){
    let sql = "update test set qus = '"
    +test.qus+"',ans1 = '"
    +test.ans1+"',ans2 = '"
    +test.ans2+"',ans3 = '"
    +test.ans3+"',ans = '"
    +test.ans+" where id = "
    +test.id;
    return pool.execute(sql);
  },
  //删除
  batchDelete(ids){
    let sql = "delete from student where id in ("+ids.join()+")";
    return pool.execute(sql);
  },
//   //修改
  update(test){
    let sql = "update test set qus = '"
    +test.qus+"',ans1 = '"
    +test.ans1+"',ans2 = '"
    +test.ans2+"',ans3 = '"
    +test.ans3+"',ans = '"
    +test.ans+" where id = "
    +test.id;
    return pool.execute(sql);
  }
 }
var express = require('express');
var router = express.Router();
// 连接数据库
var mongo = require('../dbs/db');

router.get('/', function(req, res, next) {
  // 接收数据并添加到数据库的处理
  let user = req.query
  let person = {};
  person[user.username]= user.password;
      mongo(
        '2018-7-28','user',
        (collection,client)=>{
          // 添加单一数据
          collection.insertOne(person,(err,res_db)=>{
            if(res_db.result.ok){
              // 后端打出添加成功
              res.send('{error:0,msg:"注册成功"}')            
              client.close();//关闭连接
            }
          })
        }
      )
})
// 导出
module.exports=router;

var express = require('express');
var router = express.Router();
var mongo = require('../dbs/db');

router.get('/', function(req, res, next) {
  //查询字段 req.query/body并且改变字符类型
  let start=parseInt(req.query.start);
  let count=req.query.count-0;

  mongo(
    '2018-7-28','content',
    (content,client)=>{
      // console.log(user);
      content.find({},{
        limit:count,
        skip:start,
        projection:{_id:0}
      }).toArray((err,res_db)=>{
        res.send(res_db);//发送给前端数据
        client.close();//关闭连接
      })
    }
  )
  
});

module.exports = router;



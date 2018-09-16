var express = require('express');
var router = express.Router();
var mongo = require('../dbs/db');

router.get('/', function(req, res, next) {
  // 数据全部转过去
  mongo(
    '2018-7-28','user',
    (content,client)=>{
      // console.log(user);
      content.find({},{       
        projection:{_id:0}
      }).toArray((err,res_db)=>{
        res.send(res_db);
        client.close();
      })
    }
  )
});

module.exports = router;



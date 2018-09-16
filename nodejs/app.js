// 引入系统或者文件模块
var express = require('express')
var path = require('path');
var bodyParser = require('body-parser')
var logger = require('morgan');
var favicon = require('serve-favicon')
var cors = require('cors')
var cookieParser = require('cookie-parser')
var cookieSession = require('cookie-session')

var index_read = require('./routes/index_read')
var user_read = require('./routes/user_read')
var user_add = require('./routes/user_add')

//web服务器
var app = express();

app.use(logger('dev'));
// body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));

// 响应
//静态托管


//配置cors中间件
app.use(cors({
  "origin":["http://localhost:8001","http://localhost:5000","http://localhost:8080"],
  "credentials":true,//允许携带凭证
  "methods":"GET,HEAD,PUT,PATCH.POST,DELETE",
  "allowedHeaders":['Content-type','Authorization']
}))


// "/"下的默认主页
// app.use('/',index)
//读取collection的content
app.use('/index_read', index_read);
//注册登陆
app.use('/user_read', user_read);
app.use('/user_add', user_add);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

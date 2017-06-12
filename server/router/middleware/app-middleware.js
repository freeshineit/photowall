//应用级中间件
const express = require('express');
const app = express();

// app.use(function(req,res,next){
//     console.log('Time:',Date.now());
//     next();
// })

// 挂载至 /user/:id 的中间件，任何指向 /user/:id 的请求都会执行它
// app.use('/user/:id', function (req, res, next) {
//   console.log('Request Type:', req.method);
//   next();
// });


// 一个中间件栈，对任何指向 /user/:id 的 HTTP 请求打印出相关信息
app.use('/user/:id', function(req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);

});


// 路由和句柄函数(中间件系统)，处理指向 /user/:id 的 GET 请求
app.get('/user/:id', function (req, res, next) {
  res.send('USER');
});

module.exports = app;

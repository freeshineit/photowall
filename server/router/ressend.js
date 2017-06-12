const express = require('express');
const router = express.Router();


// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/send',function(req,res,next){
    res.send(new Buffer('whoop'));
    console.log(next);
})
router.get('/sendstatus',function(req,res,next){
    res.status(404).send('Sorry, we cannot find that!');

    console.log(typeof next);
})

router.get('/sendtype',function(req,res,next){
    res.set('Content-Type', 'text/html');
    res.send(new Buffer('<p>some html</p>'));
})

module.exports = router;

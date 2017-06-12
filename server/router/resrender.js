const express = require('express');
const router = express.Router();

router.get('/renderview',function(req,res,next){
    res.render('index', function(err, html) { //这个方法需要设置模版引擎
      res.send('1234123412341341234131');
    });
})

//pass a local variable to the view
router.get('/renderview/var',function(req,res,next){
    res.render('index', { name: 'Tobi' }, function(err, html) {
        // ...
    });
})

module.exports = router;

const express = require('express');
const router = express.Router();

router.get('/getjsonp',function(req,res,next){
    res.jsonp({ user: 'tobi' });
})
router.get('/getjsonp/null',function(req,res,next){
    res.jsonp(null);
})

router.get('/getjsonp/status',function(req,res,next){
        res.status(200).jsonp({ error: 'message' });
        next();
    },(req,res) =>{
        console.log(JSON.stringify(req.headers));
    }
)

module.exports = router;

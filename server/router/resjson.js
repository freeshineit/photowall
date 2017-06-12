const express = require('express');
const router = express.Router();

router.get('/getJson',function(req,res,next){
    res.json({ user: 'tobi' });
})

router.get('/getJson/null',function(req,res,next){
    res.json(null);
})

router.get('/getJson/status',function(req,res,next){
    res.status(500).json({ error: 'message' });
})



module.exports = router;
